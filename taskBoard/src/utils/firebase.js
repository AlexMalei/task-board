import AsyncStorage from '@react-native-community/async-storage'
import firebase from 'react-native-firebase'

import { TOKEN_STORAGE_KEY } from '@/constants'
import { doLogout } from '@/utils'

export const doRefresh = async () => {
  try {
    //force refresh user token
    const refreshedToken = await firebase.auth().currentUser.getIdToken(true)

    await AsyncStorage.setItem(TOKEN_STORAGE_KEY, refreshedToken)
  } catch (error) {
    doLogout()
    return { error, success: false }
  }
}
