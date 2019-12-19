import React from 'react'
import { StyleSheet } from 'react-native'

import { StyledInputContainer, TextInput, InputTitle } from './component'

const Input = ({ label, error, touched, ...props }) => {
  const errorStyle = {
    borderColor: 'red',
    borderWidth: 1,
  }
  //@todo: error text layout
  return (
    <StyledInputContainer>
      {label ? <InputTitle>{label}</InputTitle> : null}
      <TextInput
        style={error && touched ? errorStyle : null}
        autoCorrect={false}
        placeholderTextColor="#13131380"
        {...props}
      />
    </StyledInputContainer>
  )
}

export default Input
