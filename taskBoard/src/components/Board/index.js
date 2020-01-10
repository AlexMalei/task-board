import React from 'react'

import Button from '@/fields/Button'
import Task from '@/components/Task'
import DraggableButton from '@/components/Draggable/Button'
import { theme } from '@/theme'

import { StyledContainer, StyledTitle, StyledBoardHeader, StyledTasksContainer } from './component'

const Board = ({ name, tasks, onLongPress, isActive }) => {
  const handleAddTaskPress = () => {
    //@todo: add modal window for adding task after button press
    console.log('button ADD TASK was clicked')
  }

  return (
    <StyledContainer
      onLongPress={onLongPress}
      style={{
        borderColor: isActive ? theme.colors.red : 'none',
        borderWidth: isActive ? 2 : 0,
      }}
      activeOpacity={0.8}
      isActive={isActive}
    >
      <StyledBoardHeader>
        <StyledTitle>{name}</StyledTitle>
        <DraggableButton handlePress={handleAddTaskPress}>
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
