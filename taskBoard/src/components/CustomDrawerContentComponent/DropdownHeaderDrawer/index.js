import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'

const ModalDropdown = () => {
  return (
    <ModalDropdown
      options={DEMO_OPTIONS_1}
      defaultValue={<StyledDrawerIcon name="more-horiz" />}
      keyboardShouldPersistTaps={'always'}
      style={styles.bla}
      dropdownStyle={styles.drop}
      dropdownTextStyle={styles.dropText}
      dropdownTextHighlightStyle={styles.dropText}
      animated={true}
      renderButtonText={() => <StyledDrawerIcon name="more-horiz" />}
      onSelect={onPressDropdown}
    />
  )
}

export default ModalDropdown
