import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { HOME_PAGE_PATH } from '@/constants'
import IconMenu from '@/components/IconMenu'

const Home = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.appContainer}>
      <Text>Home</Text>
    </View>
  )
}

Home.navigationOptions = ({ navigation }) => ({
  title: HOME_PAGE_PATH,
  headerLeft: <IconMenu navigation={navigation} />,
})

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eded',
  },
  button: {
    marginLeft: 10,
  },
})

export default Home
