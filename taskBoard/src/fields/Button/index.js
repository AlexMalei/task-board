import React from 'react'

import { ButtonContainer, Button as TouchableButton, ButtonText } from './component'

const Button = ({ children }) => {
  return (
    <ButtonContainer>
      <TouchableButton>
        <ButtonText>{children}</ButtonText>
      </TouchableButton>
    </ButtonContainer>
  )
}

export default Button
