import firebase from 'react-native-firebase'

export const AuthAPI = {
  signUp: (email, password) =>
    new Promise(async resolve => resolve(await firebase.auth().createUserWithEmailAndPassword(email, password))),

  signIn: (email, password) =>
    new Promise(async resolve => resolve(await firebase.auth().signInWithEmailAndPassword(email, password))),

  signOut: () => new Promise(async resolve => resolve(await firebase.auth().signOut())),

  oAuthLogin: () => new Promise(async resolve => resolve()),
}
