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
import { HOME_PAGE_PATH } from '@/constants'

const SignInForm = ({ initialValues, navigation }) => {
  useEffect(() => {
    return firebase.auth().onUserChanged(async user => {
      try {
        if (user) {
          const jwtToken = await user.getIdToken()
          setJwtToken(jwtToken)
          navigation.navigate(HOME_PAGE_PATH)
        }
      } finally {
        console.log('test')
      }
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
    password: 'example-password',
  },
}

// SignInForm.propTypes = {
//   initialValues: PropTypes.shape({
//     email: PropTypes.string,
//     password: PropTypes.string,
//   }),
// }

export default SignInForm
