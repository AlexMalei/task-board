import React from 'react'
import { ActivityIndicator } from 'react-native'

import { ButtonContainer, Button as TouchableButton, ButtonText } from './component'

const Button = ({ children, loading = false, onClick, useBackground, ...props }) => {
  return (
    <ButtonContainer>
      <TouchableButton activeOpacity={0.5} useBackground={useBackground} onPress={onClick} {...props}>
        {loading ? <ActivityIndicator /> : <ButtonText>{children}</ButtonText>}
      </TouchableButton>
    </ButtonContainer>
  )
}

Button.defaultProps = {
  useBackground: true,
}

export default Button
