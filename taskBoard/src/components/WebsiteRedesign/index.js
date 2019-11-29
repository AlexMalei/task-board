import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import IconMenu from '@/components/IconMenu'

import { WEBSITE_REDESIGN_PATH } from '@/constants'

const WebsiteRedesign = () => {
  return (
    <View style={styles.appContainer}>
      <Text>WebsiteRedesign</Text>
    </View>
  )
}

WebsiteRedesign.navigationOptions = ({ navigation }) => ({
  title: WEBSITE_REDESIGN_PATH,
  headerLeft: <IconMenu navigation={navigation} />,
})

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eded',
  },
})

export default WebsiteRedesign
