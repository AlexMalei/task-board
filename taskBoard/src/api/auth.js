import firebase from 'react-native-firebase'

export const AuthAPI = {
  signUp: (email, password) =>
    new Promise(async resolve => resolve(await firebase.auth().createUserWithEmailAndPassword(email, password))),

  signIn: (email, password) =>
    new Promise(async resolve => {
      try {
        const userCreds = await firebase.auth().signInWithEmailAndPassword(email, password)
        resolve(userCreds)
      } catch (error) {
        console.log('ERROR', error)
      }
    }),

  signOut: () =>
    new Promise(async resolve => {
      console.log('here')
      resolve(await firebase.auth().signOut())
    }),

  oAuthLogin: () => new Promise(async resolve => resolve()),
}
