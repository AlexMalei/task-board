import React from 'react'
import { ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { StyledFormContainer } from './component'

const Form = ({ children }) => {
  return (
    /*  <KeyboardAwareScrollView> */

    <StyledFormContainer behavior="padding" keyboardVerticalOffset={0}>
      {children}
    </StyledFormContainer>

    /*  </KeyboardAwareScrollView> */
  )
}

export default Form
