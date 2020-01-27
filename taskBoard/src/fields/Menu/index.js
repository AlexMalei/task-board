import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import ReactMenu, { MenuItem } from 'react-native-material-menu'

import { StyledMenuContainer, StyledMenuTitle, StyledMenuTextContainer } from './component'

const Menu = ({ items, visibleFieldName, title, selectedItem, handleItemPress }) => {
  const [menu, setMenu] = useState(null)

  const setMenuRef = ref => {
    setMenu(ref)
  }

  const handlePressItem = item => {
    menu.hide()
    handleItemPress(item)
  }

  const showMenu = () => {
    menu.show()
  }

  return (
    <StyledMenuContainer>
      <StyledMenuTitle>{title}</StyledMenuTitle>
      <ReactMenu
        ref={setMenuRef}
        style={styles.menu}
        button={
          <StyledMenuTextContainer onPress={showMenu}>{selectedItem?.[visibleFieldName]}</StyledMenuTextContainer>
        }
      >
        {items?.map(item => {
          return <MenuItem onPress={() => handlePressItem(item)}>{item[visibleFieldName]}</MenuItem>
        })}
      </ReactMenu>
    </StyledMenuContainer>
  )
}

Menu.defaultProps = {
  visibleFieldName: 'name',
}

const styles = StyleSheet.create({
  menu: {
    width: '80%',
  },
})

export default Menu
