import React, { useState } from 'react'
import { PanResponder } from 'react-native'

import { StyledContainer, StyledTitle, StyledBoardHeader, StyledTasksContainer } from './component'
import BoardButton from '@/fields/BoardButton'
import Task from '@/components/Task'
import Animated from 'react-native-reanimated'

const Board = ({ name, tasks, onLongPress, isActive }) => {
  const [height, setHeight] = useState(0)

  const saveAllScreenContainerHeight = event => {
    if (height === 0) {
      setHeight(event.nativeEvent.layout.height)
    }
  }
  const minHeightStyle = height === 0 ? {} : { minHeight: height }

  return (
    <StyledContainer
      onLayout={event => saveAllScreenContainerHeight(event)}
      style={minHeightStyle}
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
      <StyledTasksContainer>
        {tasks.map(({ id, ...task }) => (
          <Task key={id} task={task} />
        ))}
      </StyledTasksContainer>
    </StyledContainer>
  )
}

export default Board
