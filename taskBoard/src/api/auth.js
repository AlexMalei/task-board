import firebase from 'react-native-firebase'

import { LOGIN_PATH } from '@/constants'

export const AuthAPI = {
  signUp: (email, password) =>
    new Promise(async resolve => resolve(await firebase.auth().createUserWithEmailAndPassword(email, password))),

  signIn: (email, password) =>
    new Promise(async resolve => {
      try {
        const userCreds = await firebase.auth().signInWithEmailAndPassword(email, password)
        resolve(userCreds)
      } catch (error) {
        console.log('testERROR', error)
      }
    }),

  signOut: navigation =>
    new Promise(async resolve => {
      resolve(await firebase.auth().signOut())
      navigation.navigate(LOGIN_PATH)
    }),

  oAuthLogin: () => new Promise(async resolve => resolve()),
}
