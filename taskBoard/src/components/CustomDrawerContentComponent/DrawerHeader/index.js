import React from 'react'
import { View, TouchableHighlight } from 'react-native'

import DropdownProfileDrawer from '@/components/CustomDrawerContentComponent/DropdownHeaderDrawer'
import NavigationService from '@/services/Navigation'

import {
  StyledDrawerHeader,
  StyledDrawerImageProfile,
  StyledDrawerProfileText,
  StyledDrawerTextGray,
} from './component'
import { PROFILE_PAGE_PATH } from '@/constants'

const onUserProfile = () => {
  NavigationService.navigate(PROFILE_PAGE_PATH)
}

const DrawerHeader = ({ name, avatar, role }) => {
  return (
    <StyledDrawerHeader>
      <TouchableHighlight onPress={() => onUserProfile()}>
        <StyledDrawerImageProfile
          source={{
            uri: avatar,
          }}
        />
      </TouchableHighlight>
      <View>
        <StyledDrawerProfileText>{name}</StyledDrawerProfileText>
        <StyledDrawerTextGray>{role}</StyledDrawerTextGray>
      </View>
      <DropdownProfileDrawer />
    </StyledDrawerHeader>
  )
}

export default DrawerHeader
