import React from 'react'
import { TouchableOpacity } from 'react-native'

import { StyledContainer, StyledTitle, StyledBoardHeader } from './component'
import BoardButton from '@/fields/BoardButton'

const Board = ({ name, tasks, onLongPress, isActive }) => {
  return (
    <StyledContainer
      style={{
        borderColor: isActive ? 'red' : 'none',
        borderWidth: isActive ? 2 : 0,
      }}
      activeOpacity={0.8}
      onLongPress={onLongPress}
      isActive={isActive}
    >
      <StyledBoardHeader>
        <StyledTitle>{name}</StyledTitle>
        <BoardButton
          onPress={() => {
            //@todo: touchable highlight don't bubble event when onLongPress defined
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
