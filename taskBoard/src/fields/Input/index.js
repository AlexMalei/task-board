import React from 'react'
import { StyleSheet } from 'react-native'

import { theme } from '@/theme'
import { StyledInputContainer, TextInput, InputTitle, SubmitIconContainer, SubmitIcon } from './component'

const Input = ({
  label,
  error,
  touched,
  multiline,
  keyboardType,
  containerStyle,
  inputStyle,
  submitButton,
  disableSubmitButton,
  onSubmit,
  ...props
}) => {
  //@todo: error text layout
  return (
    <StyledInputContainer style={containerStyle}>
      {label ? <InputTitle>{label}</InputTitle> : null}
      <TextInput
        style={[error && touched ? styles.errorStyle : null, inputStyle]}
        autoCorrect={false}
        placeholderTextColor="#13131380"
        multiline={multiline}
        keyboardType={keyboardType}
        {...props}
      />
      {submitButton && (
        <SubmitIconContainer disabled={disableSubmitButton} activeOpacity={0.8} onPress={onSubmit}>
          <SubmitIcon name="arrow-circle-right" />
        </SubmitIconContainer>
      )}
    </StyledInputContainer>
  )
}

Input.defaultProps = {
  multiline: false,
  keyboardType: 'default',
  containerStyle: {},
  inputStyle: {},
  submitButton: false,
  disableSubmitButton: false,
  onSubmit: () => {},
}

const styles = StyleSheet.create({
  errorStyle: {
    borderColor: theme.colors.red,
    borderWidth: 1,
  },
})

export default Input
