import React from 'react'
import { StyleIcon } from './component'

const IconMenu = ({ navigation }) => {
  return <StyleIcon name="menu" onPress={() => navigation.toggleDrawer()} />
}

export default IconMenu
