import AsyncStorage from '@react-native-community/async-storage'
import decodeJWT from 'jwt-decode'

import { TOKEN_STORAGE_KEY } from '@/constants'

const HASURA_CLAIMS = 'https://hasura.io/jwt/claims'
const HASURA_USER_ID_CLAIM = 'x-hasura-user-id'

export const getUserIdFromToken = async () => {
  const token = await AsyncStorage.getItem(TOKEN_STORAGE_KEY)
  const data = await decodeJWT(token)

  return data[HASURA_CLAIMS][HASURA_USER_ID_CLAIM]
}
