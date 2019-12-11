import AsyncStorage from '@react-native-community/async-storage'

import { TOKEN_STORAGE_KEY, LOGIN_PATH } from '@/constants'
import { reconnect, wsLink } from '@/client'
import { NavigationService } from '@/services/Navigation'

export const doLogout = () => {
  AsyncStorage.removeItem(TOKEN_STORAGE_KEY)

  wsLink.subscriptionClient.unsubscribeAll()
  reconnect()

  NavigationService.navigate(LOGIN_PATH)
}
