import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { StyledFormContainer } from './component'
import { View } from 'native-base'

const Form = ({ children }) => {
  const [height, setHeight] = useState(0)

  const saveAllScreenContainerHeight = event => {
    if (height === 0) {
      setHeight(event.nativeEvent.layout.height)
    }
  }
  const heightStyle = height === 0 ? {} : { height }

  return (
    <View style={{ flex: 1, height }} onLayout={event => saveAllScreenContainerHeight(event)}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        enableOnAndroid={true}
        extraHeight={0}
        extraScrollHeight={0}
      >
        <StyledFormContainer style={[heightStyle]} behavior="padding" keyboardVerticalOffset={0}>
          {children}
        </StyledFormContainer>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default Form
