import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { concat } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import firebase from 'react-native-firebase'

import { GQL_SERVER_URL } from '@/constants'

const httpLink = new HttpLink({ uri: GQL_SERVER_URL })

const withToken = setContext(async request => {
  //@todo: make saving in async storage
  const jwtToken = await firebase.auth().currentUser.getIdToken()
  console.log('token', jwtToken)
  return {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  }
})

const cache = new InMemoryCache()

export const gqlClient = new ApolloClient({
  link: concat(withToken, httpLink),
  cache,
})

cache.writeData({
  data: {
    auth: { uid: '' },
  },
})
