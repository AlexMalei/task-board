import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, Dimensions, Keyboard, KeyboardAvoidView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { StyledFormContainer } from './component'
import { View } from 'native-base'

const Form = ({ children }) => {
  const [height, setHeight] = useState(0)

  const saveAllScreenContainerHeight = event => {
    if (height === 0) {
      setHeight(event.nativeEvent.layout.height)
    }
    console.log('height', height)
  }
  const heightStyle = height === 0 ? {} : { height }

  return (
    <View style={{ flex: 1, height }} onLayout={event => saveAllScreenContainerHeight(event)}>
      <KeyboardAwareScrollView enableOnAndroid={true} extraHeight={0} extraScrollHeight={0}>
        <StyledFormContainer
          style={[heightStyle]}
          behavior="padding"
          keyboardVerticalOffset={0}
          onLayout={event => {
            console.log('event.nativeEvent.layout.height', event.nativeEvent.layout.height)
          }}
        >
          {children}
        </StyledFormContainer>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default Form
