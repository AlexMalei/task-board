import React from 'react'

import { parseDate } from '@/helpers'
import { HeaderContainer, TaskName, TaskCreationContainer, Author, Date } from './component'

//@todo: add icons on top of screen
const Header = ({ name, authorName, creationDate }) => {
  return (
    <HeaderContainer>
      <TaskName>{name}</TaskName>
      <TaskCreationContainer>
        <Author>{`Added by ${authorName}, `}</Author>
        <Date>{parseDate(creationDate)}</Date>
      </TaskCreationContainer>
    </HeaderContainer>
  )
}

export default Header
