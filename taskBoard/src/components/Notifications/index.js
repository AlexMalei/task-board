import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { NOTIFICATIONS_PAGE_PATH } from '@/constants'
import HeaderIcon from '@/components/HeaderIcon'

const Notifications = () => {
  return (
    <View style={styles.appContainer}>
      <Text>Notifications</Text>
    </View>
  )
}

Notifications.navigationOptions = ({ navigation }) => ({
  title: NOTIFICATIONS_PAGE_PATH,
  headerLeft: <HeaderIcon name="menu" onPress={() => navigation.toggleDrawer()} />,
})

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eded',
  },
})

export default Notifications
