import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const Profile = () => {
  return (
    <View style={styles.appContainer}>
      <Text>User</Text>
    </View>
  )
}

Profile.navigationOptions = ({ navigation }) => ({
  title: 'Profile',
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
  },
})

export default Profile
