import { AsyncStorage } from 'react-native'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import { RetryLink } from 'apollo-link-retry'
import { onError } from 'apollo-link-error'
import { getMainDefinition } from 'apollo-utilities'
import { ApolloLink, split } from 'apollo-link'

import { GQL_SERVER_URL, TOKEN_STORAGE_KEY } from '@/constants'
import { refreshJwtToken, getJwtToken } from '@/utils'

const retryLink = new RetryLink({
  delay: {
    initial: 1 * 1000,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 5,
  },
})

const httpLink = new HttpLink({
  uri: api.graphql,
})

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem(TOKEN_STORAGE_KEY)

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export const wsLink = new WebSocketLink({
  uri: GQL_SERVER_URL,
  options: {
    reconnect: true,
    lazy: true,

    connectionCallback: async error => {
      console.log('Connection: ', error || 'Successful!')

      if (error && error.includes('JWTExpired')) {
        await doRefresh()
        reconnect()
      } else if (error) {
        reconnect()
      }
    },

    connectionParams: async () => {
      const token = AsyncStorage.getItem(TOKEN_STORAGE_KEY)

      return {
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
      }
    },

    onError: error => {
      console.log('WS Error: ', error)
    },
  },
})

const errorHandlingLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    })
  }

  if (networkError) {
    if (networkError.message === 'start received before the connection is initialised') {
      reconnect()
    }
    console.log('[Network error]: ', networkError)
  }
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && 'operation' === 'subscription'
  },
  retryLink.concat(wsLink),
  authLink.concat(httpLink),
)

export const wsClient = new ApolloClient({
  link: ApolloLink.from([errorHandlingLink, link]),
  cache: new InMemoryCache({
    addTypename: false,
    dataIdFromObject: object => object.id || object._id,
  }),
})

export const reconnect = () => {
  wsLink.subscriptionClient.close(false, false)
}
