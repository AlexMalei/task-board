import React from 'react'
import { View, Picker, YellowBox } from 'react-native'

import imageProfile from '@/assets/user_logo.jpeg'
import DropdownProfileDrawer from '@/components/CustomDrawerContentComponent/DropdownHeaderDrawer'

import {
  StyledDrawerHeader,
  StyledDrawerImageProfile,
  StyledDrawerProfileText,
  StyledDrawerTextGray,
} from './component'

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // @todo: Remove when fixed https://github.com/GeekyAnts/NativeBase/issues/2947
])

useEffect(() => {
  const getContacts = async () => {
    const contacts = await fetchContacts()

    setState({
      ...state,
      contacts,
      loading: false,
      error: false,
    })
  }
}, [])

const DrawerHeader = () => {
  return (
    <StyledDrawerHeader>
      <StyledDrawerImageProfile source={imageProfile} />
      <View>
        <StyledDrawerProfileText>Sacha Belui</StyledDrawerProfileText>
        <StyledDrawerTextGray>Junior</StyledDrawerTextGray>
      </View>
      <DropdownProfileDrawer />
    </StyledDrawerHeader>
  )
}

export default DrawerHeader
