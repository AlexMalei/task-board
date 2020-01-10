import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { PanResponder } from 'react-native'

const DraggableButton = ({ children, handleClick }) => {
  const [dragging, setDragging] = useState(false)

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => {
      return true
    },

    onStartShouldSetPanResponderCapture: (evt, gestureState) => {
      return true
    },

    onPanResponderGrant: (evt, gestureState) => {
      handleClick()
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

export default DraggableButton
