import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import { Formik } from 'formik'

import FormTitle from '@/fields/FormTitle'
import Input from '@/fields/Input'
import Button from '@/fields/Button'
import Form from '@/forms/Form'
import { signInSchema } from '@/validators'
import { AuthAPI } from '@/api'
import { HOME_PAGE_PATH, TOKEN_STORAGE_KEY } from '@/constants'
import NavigationService from '@/services/Navigation'

const SignInForm = ({ initialValues }) => {
  const handleSignIn = async (email, password) => {
    try {
      const result = await AuthAPI.signIn(email, password)
      const token = await firebase.auth().currentUser.getIdToken()
      AsyncStorage.setItem(TOKEN_STORAGE_KEY, token)

      NavigationService.navigate(HOME_PAGE_PATH)
    } catch ({ message }) {
      if (message.includes('The password is invalid')) {
        Alert.alert('Password is invalid!')
      } else if (message.includes('There is no user record corresponding to this identifier')) {
        Alert.alert('No user with this email!')
      }
      console.log('AUTH ERROR: ', message)
    }
  }

  //@todo: make error messages
  return (
    <Formik initialValues={initialValues} validationSchema={signInSchema}>
      {({ values, touched, errors, handleChange, handleBlur }) => {
        return (
          <Form>
            <FormTitle>Sign In</FormTitle>

            <Input
              label="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors['email']}
              touched={touched['email']}
              placeholder="example@gmail.com"
            />

            <Input
              label="Password"
              secureTextEntry={true}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors['password']}
              touched={touched['password']}
              placeholder="*************"
            />

            <Button onClick={() => handleSignIn(values.email, values.password)}>Sign In</Button>
          </Form>
        )
      }}
    </Formik>
  )
}

SignInForm.defaultProps = {
  initialValues: {
    email: 'example.mail@gmail.com',
    password: 'example-password',
  },
}

export default SignInForm
