import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

const IconMenu = ({ navigation }) => {
  return <Icon style={styles.icon} name="menu"
size={30} color="#000000"
onPress={() => navigation.toggleDrawer()} />
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 10,
  },
})

export default IconMenu
