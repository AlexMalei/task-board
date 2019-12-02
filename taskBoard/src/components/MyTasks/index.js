import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { DrawerActions } from 'react-navigation-drawer'

const MyTasks = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.appContainer}>
      <Text>MyTasks</Text>
    </View>
  )
}

MyTasks.navigationOptions = ({ navigation }) => ({
  title: 'MyTasks',
  headerLeft: (
    <Button
      source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
      onPress={() => navigation.toggleDrawer()}
      title="Ic"
    />
  ),
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
