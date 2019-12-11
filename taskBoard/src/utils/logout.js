import { AsyncStorage } from 'react-native'

import { TOKEN_STORAGE_KEY, USER_ID_STORAGE_KEY } from '@/constants'
import { reconnect, wsLink } from '@/client'

export const doLogout = () => {
  AsyncStorage.removeItem(TOKEN_STORAGE_KEY)
  AsyncStorage.removeItem(USER_ID_STORAGE_KEY)

  wsLink.subscriptionClient.unsubscribeAll()

  reconnect()
  //@todo: make navigate to auth page
}
