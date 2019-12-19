import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { MY_TASKS_PAGE_PATH } from '@/constants'
import HeaderIcon from '@/components/HeaderIcon'

const MyTasks = () => {
  return (
    <View style={styles.appContainer}>
      <Text>MyTasks</Text>
    </View>
  )
}

MyTasks.navigationOptions = ({ navigation }) => ({
  title: MY_TASKS_PAGE_PATH,
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

export default MyTasks
