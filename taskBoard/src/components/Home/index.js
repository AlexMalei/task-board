import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { DrawerActions } from 'react-navigation-drawer'

const Home = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.appContainer}>
      <Text>Home</Text>
    </View>
  )
}

Home.navigationOptions = ({ navigation }) => ({
  title: 'Home',
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

export default Home
