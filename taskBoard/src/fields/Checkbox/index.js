import React from 'react'
import { StyleSheet } from 'react-native'
import { CheckBox as ReactCheckBox } from 'react-native-elements'

import { theme } from '@/theme'

const Checkbox = ({ onPress, ...props }) => {
  return (
    <ReactCheckBox
      size={30}
      containerStyle={styles.checkBoxContainer}
      wrapperStyle={styles.checkBoxWrapper}
      textStyle={styles.checkBoxWrapper}
      onIconPress={onPress}
      {...props}
      checkedColor={theme.colors.gray}
      uncheckedColor={theme.colors.gray}
    />
  )
}

const styles = StyleSheet.create({
  checkBoxContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    padding: 0,
    marginLeft: 0,
    marginRight: 0,

    backgroundColor: 'transparent',
  },
  checkBoxWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    padding: 0,
    marginLeft: 0,
    marginRight: 0,
  },
})

export default Checkbox
