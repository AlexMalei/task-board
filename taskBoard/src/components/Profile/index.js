import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const Profile = () => {
  return (
    <View style={styles.appContainer}>
      <Text>Profile</Text>
    </View>
  )
}

Profile.navigationOptions = ({ navigation }) => ({
  title: 'Profile',
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

export default Profile
