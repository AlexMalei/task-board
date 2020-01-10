import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { Button as ReactButton } from 'react-native-elements'

import { theme } from '@/theme'

const Button = ({ children, onPress, disabled, ...props }) => {
  return (
    <View {...props}>
      <ReactButton
        buttonStyle={styles.button}
        titleStyle={styles.content}
        title={children}
        type="solid"
        onPress={onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    minWidth: 100,
    padding: 15,

    borderRadius: 25,
    backgroundColor: theme.colors.lightGreen,
  },

  content: {
    flex: 1,
    fontWeight: `${theme.fontWeights.bold}`,
    fontSize: theme.fontSizes[0],

    color: theme.colors.black,
  },
})

Button.defaultProps = {
  onPress: () => {},
  disabled: false,
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onPress: PropTypes.func.isRequired,
}

export default Button
