import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

import { theme } from '@/theme'

const BoardButton = ({ children, onPress }) => {
  return (
    <Button buttonStyle={styles.button} titleStyle={styles.content} title={children} type="solid" onPress={onPress} />
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 100,
    padding: 15,

    borderRadius: 25,
    backgroundColor: theme.colors.lightGreen,
  },

  content: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: theme.fontSizes[0],

    color: theme.colors.black,
  },
})

BoardButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onPress: PropTypes.func.isRequired,
}

export default BoardButton
