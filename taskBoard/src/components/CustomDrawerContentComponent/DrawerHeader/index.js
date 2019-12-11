import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'

import imageProfile from '@/assets/user_logo.jpeg'

import {
  StyledDrawerHeader,
  StyledDrawerImageProfile,
  StyledDrawerProfileText,
  StyledDrawerTextGray,
  StyledDrawerIcon,
} from './component'
import { Left } from 'native-base'
import { black, white } from 'ansi-colors'

const DEMO_OPTIONS_1 = ['Profile', 'Notifications', 'Logout']

const DrawerHeader = () => {
  var data = [[<StyledDrawerIcon name="more-horiz" />, ['bla']]]

  return (
    <StyledDrawerHeader>
      <StyledDrawerImageProfile source={imageProfile} />
      <View>
        <StyledDrawerProfileText>Sacha Belui</StyledDrawerProfileText>
        <StyledDrawerTextGray>Junior</StyledDrawerTextGray>
      </View>
      {/* <StyledDrawerIcon name="more-horiz" /> */}
    </StyledDrawerHeader>
  )
}

const onPressDropdown = index => {
  switch (index) {
    case '0':
      console.log('0')
      break
    case '1':
      console.log('1')
      break
    case '2':
      console.log('2')
      break
    default:
      break
  }
}

const y = {
  right: 0,
  width: 10,
}

const styles = StyleSheet.create({
  bla: {
    // right: 0,
    // justifyContent: 'flex-end',
  },
  drop: {
    marginTop: 25,
    marginRight: -22,
    width: 120,
    // justifyContent: 'space-around',
    // alignItems: 'stretch',
    // justifyContent: 'flex-end',
    height: 118,
    // top: 30,
  },
  dropText: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#202020',
    color: 'white',
    fontSize: 14,
  },
})

export default DrawerHeader
