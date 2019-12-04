import React from 'react'
import { View } from 'react-native'

import {
  StyledDrawerHeader,
  StyledDrawerImageProfile,
  StyledDrawerProfileText,
  StyledDrawerTextGray,
  StyledDrawerIcon,
} from './component'

const DrawerHeader = () => {
  return (
    <StyledDrawerHeader>
      <StyledDrawerImageProfile source={require('@/assets/user_logo.jpeg')} />
      <View>
        <StyledDrawerProfileText>Sacha Belui</StyledDrawerProfileText>
        <StyledDrawerTextGray>Junior</StyledDrawerTextGray>
      </View>
      <StyledDrawerIcon name="more-horiz" />
    </StyledDrawerHeader>
  )
}

export default DrawerHeader
