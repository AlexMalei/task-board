import React from 'react'
import PropTypes from 'prop-types'
import { PanResponder } from 'react-native'

const DraggableButton = ({ children, handlePress }) => {
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => {
      return true
    },

    onStartShouldSetPanResponderCapture: (evt, gestureState) => {
      return true
    },

    onPanResponderGrant: (evt, gestureState) => {
      handlePress()
    },

    onPanResponderTerminate: (evt, gestureState) => {},

    onShouldBlockNativeResponder: (evt, gestureState) => {
      return false
    },
  })

  return children({
    buttonHandlers: panResponder.panHandlers,
  })
}

DraggableButton.propTypes = {
  handlePress: PropTypes.func,
}

export default DraggableButton
