import React from 'react'
import { View } from 'react-native'

import imageProfile from '@/assets/user_logo.jpeg'

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
      <StyledDrawerImageProfile source={imageProfile} />
      <View>
        <StyledDrawerProfileText>Sacha Belui</StyledDrawerProfileText>
        <StyledDrawerTextGray>Junior</StyledDrawerTextGray>
      </View>
      <StyledDrawerIcon name="more-horiz" />
    </StyledDrawerHeader>
  )
}

export default DrawerHeader
