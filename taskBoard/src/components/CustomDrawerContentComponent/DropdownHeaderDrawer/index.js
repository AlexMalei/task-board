import React from 'react'
import { StyleSheet } from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'

import { LOGIN_PATH, PROFILE_PAGE_PATH, LOGOUT_PATH, SETTINGS_PATH } from '@/constants'
import NavigationService from '@/services/Navigation'
import { doLogout } from '@/utils'
import { AuthAPI } from '@/api'

import { StyledDrawerIcon } from './component'

const MENU_OPTIONS = [PROFILE_PAGE_PATH, SETTINGS_PATH, LOGOUT_PATH]

const DropdownProfileDrawer = () => {
  return (
    <ModalDropdown
      options={MENU_OPTIONS}
      defaultValue={<StyledDrawerIcon name="more-horiz" />}
      keyboardShouldPersistTaps={'always'}
      style={styles.bla}
      dropdownStyle={styles.drop}
      dropdownTextStyle={styles.dropText}
      dropdownTextHighlightStyle={styles.dropText}
      animated={true}
      renderButtonText={() => <StyledDrawerIcon name="more-horiz" />}
      onSelect={index => onPressDropdown(index)}
    />
  )
}

const onSignOut = () => {
  AuthAPI.signOut()
  doLogout()
  NavigationService.navigate(LOGIN_PATH)
}

const onPressDropdown = index => {
  switch (index) {
    case '0':
      break
    case '1':
      break
    case '2':
      onSignOut()
      break
    default:
      break
  }
}

const styles = StyleSheet.create({
  drop: {
    marginTop: 25,
    marginRight: -15,
    width: 120,
    height: 118,
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

export default DropdownProfileDrawer
