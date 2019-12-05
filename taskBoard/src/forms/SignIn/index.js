import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import firebase from 'react-native-firebase'
import { Formik } from 'formik'

import FormTitle from '@/fields/FormTitle'
import Input from '@/fields/Input'
import Button from '@/fields/Button'
import Form from '@/forms/Form'
import { signInSchema } from '@/validators'
import { AuthAPI } from '@/api'
import { setJwtToken } from '@/utils'

const SignInForm = ({ initialValues, navigation }) => {
  useEffect(() => {
    return firebase.auth().onUserChanged(user => {
      //@todo: redirect to main screen
      console.log('this.PROPS', navigation)
      firebase
        .auth()
        .signOut()
        .then(result => console.log('signout'))
      try {
        if (user !== null) {
          navigation.navigate('Home')
          setJwtToken()
        }

        console.log('You Log_in')
      } catch (e) {
        console.log('error', e)
      }
      console.log('changed user', user)
    })
  })

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

            <Button onClick={() => AuthAPI.signIn(values.email, values.password)}>Sign In</Button>
          </Form>
        )
      }}
    </Formik>
  )
}

SignInForm.defaultProps = {
  initialValues: {
    email: 'example.mail@gmail.com',
    password: 'example-password1',
  },
}

SignInForm.propTypes = {
  initialValues: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
}

export default SignInForm
