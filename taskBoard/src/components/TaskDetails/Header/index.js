import React from 'react'

import { parseDate } from '@/helpers'
import { HeaderContainer, TaskName, CreationData } from './component'

//@todo: add icons on top of screen
const Header = ({ name, authorName, creationDate }) => {
  return (
    <HeaderContainer>
      <TaskName>{name}</TaskName>
      <CreationData>{`Added by ${authorName}  ${parseDate(creationDate)}`}</CreationData>
    </HeaderContainer>
  )
}

export default Header
