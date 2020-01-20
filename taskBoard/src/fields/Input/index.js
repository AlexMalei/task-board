import React from 'react'
import { StyleSheet } from 'react-native'

import { theme } from '@/theme'
import { StyledInputContainer, TextInput, InputTitle } from './component'

const Input = ({ label, error, touched, multiline, keyboardType, ...props }) => {
  //@todo: error text layout
  return (
    <StyledInputContainer>
      {label ? <InputTitle>{label}</InputTitle> : null}
      <TextInput
        style={error && touched ? styles.errorStyle : null}
        autoCorrect={false}
        placeholderTextColor="#13131380"
        multiline={multiline}
        keyboardType={keyboardType}
        {...props}
      />
    </StyledInputContainer>
  )
}

Input.defaultProps = {
  multiline: false,
  keyboardType: 'default',
}

const styles = StyleSheet.create({
  errorStyle: {
    borderColor: theme.colors.red,
    borderWidth: 1,
  },
})

export default Input
