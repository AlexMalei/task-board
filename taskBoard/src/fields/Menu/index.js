import React, { useState } from 'react'
import ReactMenu, { MenuItem } from 'react-native-material-menu'

import { StyledMenuContainer, StyledMenuTitle, StyledMenuTextContainer } from './component'

const Menu = ({ items, title, selectedItem, handleItemPress }) => {
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
        button={<StyledMenuTextContainer onPress={showMenu}>{selectedItem?.name}</StyledMenuTextContainer>}
      >
        {items?.map(item => {
          return <MenuItem onPress={() => handlePressItem(item)}>{item.name}</MenuItem>
        })}
      </ReactMenu>
    </StyledMenuContainer>
  )
}

export default Menu
