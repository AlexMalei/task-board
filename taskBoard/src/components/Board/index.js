import React from 'react'
import { View, Text } from 'react-native'

import { StyledContainer, StyledTitle, StyledBoardHeader } from './component'
import BoardButton from '@/fields/BoardButton'

const Board = ({ name, tasks }) => {
  return (
    <StyledContainer>
      <StyledBoardHeader>
        <StyledTitle>{name}</StyledTitle>
        <BoardButton
          onClick={() => {
            console.log('click')
          }}
        >
          + Add Task
        </BoardButton>
      </StyledBoardHeader>
    </StyledContainer>
  )
}

export default Board
