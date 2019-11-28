import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const Home = () => {
  return (
    <View style={styles.appContainer}>
      <Text>Home</Text>
    </View>
  )
}

Home.navigationOptions = ({ navigation }) => ({
  title: 'Home',
  headerLeft: (
    <Image
      style={{ width: 30, height: 30, marginLeft: 10 }}
      source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
      onPress={() => navigation.toggleDrawer()}
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
