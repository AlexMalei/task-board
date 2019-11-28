import * as Yup from 'yup'

import { messages } from '@/constants'

const { required, error, min } = messages

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email(error.email)
    .required(required.email),
  password: Yup.string()
    .required(required.password)
    .min(4, min.password),
  aboutYourself: Yup.string().required(required.aboutYourself),
})

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email(error.email)
    .required(required.email),
  password: Yup.string()
    .required(required.password)
    .min(4, min.password),
})
