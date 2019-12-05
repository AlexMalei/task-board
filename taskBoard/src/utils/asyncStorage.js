import AsyncStorage from '@react-native-community/async-storage'
import firebase from 'react-native-firebase'

import { TOKEN_STORAGE_KEY } from '@/constants'

export const setJwtToken = async () => {
  const storedToken = await AsyncStorage.getItem(TOKEN_STORAGE_KEY)

  if (!storedToken) {
    refreshJwtToken()
  }
}

export const getJwtToken = async () => {
  return await AsyncStorage.getItem(TOKEN_STORAGE_KEY)
}

export const removeJwtToken = async () => {
  await AsyncStorage.removeItem(TOKEN_STORAGE_KEY)
}

export const refreshJwtToken = async () => {
  //@todo: upgrade
  const newToken = await firebase.auth().currentUser.getIdToken()
  await AsyncStorage.setItem(TOKEN_STORAGE_KEY, newToken)
}
