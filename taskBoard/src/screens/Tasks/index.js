import React from 'react'
import { View, Text } from 'react-native'

const Tasks = ({
  navigation: {
    state: { params },
  },
}) => {
  console.log('params', params)
  return (
    <View>
      <Text>Project Tasks</Text>
    </View>
  )
}

export default Tasks
