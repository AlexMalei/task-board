import React from 'react'
import { ActivityIndicator } from 'react-native'

import { ButtonContainer, Button as TouchableButton, ButtonText } from './component'

const Button = ({ loading = false, children, onClick, ...props }) => {
  return (
    <ButtonContainer>
      <TouchableButton onPress={onClick} {...props}>
        {loading ? <ActivityIndicator /> : <ButtonText>{children}</ButtonText>}
      </TouchableButton>
    </ButtonContainer>
  )
}

export default Button
