import React from 'react'
import { StyledDrawerTitle, StyledDrawerIconTitle, StyledTitleHeaderText, StyledDrawerIconSearch } from './component'

const DrawerTitle = () => {
  return (
    <StyledDrawerTitle>
      <StyledDrawerIconTitle name="view-list" />
      <StyledTitleHeaderText>PROJECTUS</StyledTitleHeaderText>
      <StyledDrawerIconSearch name="search" />
    </StyledDrawerTitle>
  )
}

export default DrawerTitle
