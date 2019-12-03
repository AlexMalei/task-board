import React from 'react'
import { StyleSheet, View, Text, Image, Button, ActivityIndicator } from 'react-native'
import { DrawerActions } from 'react-navigation-drawer'
import Projects from '@/components/Projects'

const Home = ({ navigation: { navigate } }) => {
  return <Projects />
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

export default Home
