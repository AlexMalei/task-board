import React, { useState } from 'react'
import PropTypes from 'prop-types'
import firebase from 'react-native-firebase'
import { Formik } from 'formik'

import FormTitle from '@/fields/FormTitle'
import Input from '@/fields/Input'
import Button from '@/fields/Button'
import Form from '@/forms/Form'
import { signUpSchema } from '@/validators'
import { AuthAPI } from '@/api'
import { useRedirectIfAuthorized } from '@/hooks'

const SignUpForm = ({ initialValues }) => {
  const [loading, setLoading] = useState(false)

  useRedirectIfAuthorized(setLoading)

  const handleSignUp = async (email, password) => {
    try {
      const result = await AuthAPI.signUp(email, password)
      const token = await firebase.auth().currentUser.getIdToken()
      AsyncStorage.setItem(TOKEN_STORAGE_KEY, token)

      //@todo: make gql mutation for adding info about_me(bio)

      NavigationService.navigate(HOME_PAGE_PATH)
    } catch ({ message }) {
      //@todo: handle firebase errors(for example: already exists email)
    }
  }

  //@todo: make error messages
  return (
    <Formik initialValues={initialValues} validationSchema={signUpSchema}>
      {({ values, touched, errors, handleChange, handleBlur }) => {
        return (
          <Form>
            <FormTitle>Sign Up</FormTitle>

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

            <Input
              label="Bio"
              value={values.aboutYourself}
              onChangeText={handleChange('aboutYourself')}
              onBlur={handleBlur('aboutYourself')}
              error={errors['aboutYourself']}
              touched={touched['aboutYourself']}
              placeholder="Something about yourself"
            />

            <Button loading={loading} onClick={() => handleSignUp(values.email, values.password)}>
              Sign Up
            </Button>
          </Form>
        )
      }}
    </Formik>
  )
}

SignUpForm.defaultProps = {
  initialValues: {
    email: 'example.mail@gmail.com',
    password: 'example-password',
    aboutYourself: 'There are some words about anything',
  },
}

SignUpForm.propTypes = {
  initialValues: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    aboutYourself: PropTypes.string.isRequired,
  }),
}

export default SignUpForm
