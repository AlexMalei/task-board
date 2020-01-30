import React, { useState } from 'react'
import ReactMenu, { MenuItem } from 'react-native-material-menu'

import { StyledMenuContainer, StyledMenuTitle, ButtonContainer } from './component'

const Menu = ({ items, visibleFieldName, title, handleItemPress, menuStyle, menuButtonContainer, children }) => {
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
    <StyledMenuContainer style={menuButtonContainer}>
      {title && <StyledMenuTitle>{title}</StyledMenuTitle>}
      <ReactMenu
        ref={setMenuRef}
        style={menuStyle}
        button={
          <ButtonContainer activeOpacity={0.8} onPress={showMenu}>
            {children}
          </ButtonContainer>
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
  visibleFieldName: null,
  title: null,
  menuStyle: {},
  buttonComponent: null,
  menuButtonContainer: {},
}

export default Menu
