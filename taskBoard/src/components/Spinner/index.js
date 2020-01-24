import React from 'react'
import { BallIndicator } from 'react-native-indicators'

import { StyledContainer } from './component'
import { theme } from '@/theme'

const Spinner = ({ color, size, count }) => {
  return (
    <StyledContainer>
      <BallIndicator color={color} size={size} count={count} />
    </StyledContainer>
  )
}

Spinner.defaultProps = {
  color: theme.colors.gray,
  size: 40,
  count: 8,
}

export default Spinner
