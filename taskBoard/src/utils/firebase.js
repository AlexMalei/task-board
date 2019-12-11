import { AsyncStorage } from 'react-native'
import { TOKEN_STORAGE_KEY, REFRESH_TOKEN_STORAGE_KEY } from '@/constants'

const REFRESH_TOKEN = ``

const serializeJSON = data => {
  return Object.keys(data)
    .map(keyName => `${encodeURIComponent(keyName)}=${encodeURIComponent(data[keyName])}`)
    .join('&')
}

export const doRefresh = async refreshToken => {
  try {
    if (!refreshToken) {
      const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_STORAGE_KEY)
      if (!refreshToken) {
        throw new Error(`Haven't refresh token!`)
      }
    }

    const refreshResponse = fetch(REFRESH_TOKEN, {
      method: 'POST',
      body: serializeJSON({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
      headers: new Headers({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    })

    const refreshedData = await refreshResponse.json()

    console.log('Refreshed!')

    await AsyncStorage.setItem(TOKEN_STORAGE_KEY, refreshedData.id_token)
    await AsyncStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, refreshedData.refresh_token)

    return { token: refreshedData.id_token }
  } catch (error) {
    doLogout()
    return { error, success: false }
  }
}
