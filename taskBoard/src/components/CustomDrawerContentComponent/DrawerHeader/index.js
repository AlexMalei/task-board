import React, { Fragment } from 'react'
import { View } from 'react-native'

import DropdownProfileDrawer from '@/components/CustomDrawerContentComponent/DropdownHeaderDrawer'
import NavigationService from '@/services/Navigation'
import { PROFILE_PAGE_PATH } from '@/constants'

import {
  StyledDrawerHeader,
  StyledDrawerImageProfile,
  StyledDrawerProfileText,
  StyledDrawerTextGray,
  StyledTouchable,
} from './component'

const onUserProfile = () => {
  NavigationService.navigate(PROFILE_PAGE_PATH)
}

const DrawerHeader = ({ name, avatar, role }) => {
  return (
    <StyledDrawerHeader>
      <StyledTouchable onPress={() => onUserProfile()}>
        <Fragment>
          <StyledDrawerImageProfile
            source={{
              uri: avatar,
            }}
          />
          <View>
            <StyledDrawerProfileText>{name}</StyledDrawerProfileText>
            <StyledDrawerTextGray>{role}</StyledDrawerTextGray>
          </View>
        </Fragment>
      </StyledTouchable>
      <DropdownProfileDrawer />
    </StyledDrawerHeader>
  )
}

export default DrawerHeader
