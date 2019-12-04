import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import IconMenu from '@/components/IconMenu'

import { WEBSITE_REDESIGN_PATH } from '@/constants'

const HomeProject = () => {
  return (
    <View style={styles.appContainer}>
      <Text>HomeProject</Text>
    </View>
  )
}

HomeProject.navigationOptions = ({ navigation }) => ({
  title: WEBSITE_REDESIGN_PATH,
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

export default HomeProject
