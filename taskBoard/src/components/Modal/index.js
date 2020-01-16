import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Overlay } from 'react-native-elements'

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '@/constants'

const MODAL_MARGIN_HORIZONTAL = 10
const MODAL_MARGIN_VERTICAL = 30

const Modal = ({ children, isVisible, onClose }) => {
  return (
    <View>
      <Overlay
        isVisible={isVisible}
        onBackdropPress={onClose}
        children={children}
        borderRadius={12}
        width={SCREEN_WIDTH - 2 * MODAL_MARGIN_HORIZONTAL}
        height={SCREEN_HEIGHT - 2 * MODAL_MARGIN_VERTICAL}
      />
    </View>
  )
}

export default Modal
