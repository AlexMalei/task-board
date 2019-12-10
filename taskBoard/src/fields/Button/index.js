import React from 'react'

import { ButtonContainer, Button as TouchableButton, ButtonText } from './component'

const Button = ({ children, onClick, useBackground, ...props }) => {
  return (
    <ButtonContainer>
      <TouchableButton activeOpacity={0.5} useBackground={useBackground} onPress={onClick} {...props}>
        <ButtonText>{children}</ButtonText>
      </TouchableButton>
    </ButtonContainer>
  )
}

Button.defaultProps = {
  useBackground: true,
}

export default Button
