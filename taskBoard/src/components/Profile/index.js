import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { PROFILE_PAGE_PATH } from '@/constants'
import IconMenu from '../IconMenu'

const Profile = () => {
  return (
    <View style={styles.appContainer}>
      <Text>Profile</Text>
    </View>
  )
}

Profile.navigationOptions = ({ navigation }) => ({
  title: PROFILE_PAGE_PATH,
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

export default Profile
