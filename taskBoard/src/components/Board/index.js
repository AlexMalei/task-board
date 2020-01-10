import React from 'react'

import { StyledContainer, StyledTitle, StyledBoardHeader, StyledTasksContainer } from './component'
import Button from '@/fields/Button'
import Task from '@/components/Task'
import DraggableButton from '@/components/Draggable/Button'

const Board = ({ name, tasks, onLongPress, isActive }) => {
  const handleAddTaskClick = () => {
    console.log('button ADD TASK was clicked')
  }

  return (
    <StyledContainer
      onLongPress={onLongPress}
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
          {({ buttonHandlers }) => <Button {...buttonHandlers}>+ Add Task</Button>}
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
