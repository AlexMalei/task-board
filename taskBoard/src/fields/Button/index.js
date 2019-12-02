import React from 'react'

import { ButtonContainer, Button as TouchableButton, ButtonText } from './component'

const Button = ({ children, onClick, ...props }) => {
  return (
    <ButtonContainer>
      <TouchableButton onPress={onClick} {...props}>
        <ButtonText>{children}</ButtonText>
      </TouchableButton>
    </ButtonContainer>
  )
}

export default Button
