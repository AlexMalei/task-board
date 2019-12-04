import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'

import { GQL_SERVER_URL } from '@/constants'
import { refreshJwtToken, getJwtToken } from '@/utils'

export const wsLink = new WebSocketLink({
  uri: GQL_SERVER_URL,
  options: {
    reconnect: true,
    lazy: true,

    connectionCallback: async error => {
      console.log('Connection: ', error || 'Successful!')

      if (error && error.includes('JWTExpired')) {
        wsLink.subscriptionClient.close()
        const result = await refreshJwtToken()
      }
    },

    connectionParams: async () => {
      const token = await getJwtToken()
      return {
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
      }
    },
  },
})

export const wsGqlClient = new ApolloClient({
  link: wsLink,
  cache: new InMemoryCache({
    addTypename: false,
  }),
})
