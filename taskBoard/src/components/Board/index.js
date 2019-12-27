import React, { useState } from 'react'

import { StyledContainer, StyledTitle, StyledBoardHeader, StyledTasksContainer } from './component'
import BoardButton from '@/fields/BoardButton'
import Task from '@/components/Task'
import DraggableButton from '@/components/Draggable/Button'

const Board = ({ name, tasks, onLongPress, isActive }) => {
  const [height, setHeight] = useState(0)

  const saveAllScreenContainerHeight = event => {
    if (height === 0) {
      setHeight(event.nativeEvent.layout.height)
    }
  }
  const minHeightStyle = height === 0 ? {} : { minHeight: height }

  const handleAddTaskClick = () => {
    console.log('button ADD TASK was clicked')
  }

  return (
    <StyledContainer
      onLongPress={onLongPress}
      style={minHeightStyle}
      style={{
        borderColor: isActive ? 'red' : 'none',
        borderWidth: isActive ? 2 : 0,
      }}
      activeOpacity={0.8}
      isActive={isActive}
    >
      <StyledBoardHeader>
        <StyledTitle>{name}</StyledTitle>
        <DraggableButton handleClick={handleAddTaskClick}>
          {({ buttonHandlers }) => <BoardButton {...buttonHandlers}>+ Add Task</BoardButton>}
        </DraggableButton>
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
