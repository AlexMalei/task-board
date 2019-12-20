import React from 'react'
import { StyleSheet } from 'react-native'

import { Button as ReactButton } from 'react-native-elements'

import { theme } from '@/theme'

const Button = ({ children, loading, onClick, useBackground, ...props }) => {
  const backgroundStyle = { backgroundColor: useBackground ? theme.colors.lightGreen : theme.colors.white }

  return (
    <ReactButton
      buttonStyle={[styles.button, backgroundStyle]}
      titleStyle={[styles.content, styles.boldText]}
      loadingStyle={styles.content}
      loadingProps={{ color: 'black' }}
      title={children}
      type={useBackground ? 'solid' : 'clear'}
      loading={loading}
      onPress={onClick}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '70%',
    padding: 15,

    borderRadius: 25,
  },

  content: {
    flex: 1,
  },

  boldText: {
    fontWeight: 'bold',
    fontSize: 14,

    color: 'black',
  },
})

Button.defaultProps = {
  useBackground: true,
  loading: false,
}

export default Button
