import React, { useState } from 'react'

import Button from '@/fields/Button'
import Task from '@/components/Task'
import DraggableButton from '@/components/Draggable/Button'
import AddTaskModal from '@/components/Modals/AddTask'
import { theme } from '@/theme'

import { StyledContainer, StyledTitle, StyledBoardHeader, StyledTasksContainer } from './component'

const Board = ({ projectId, id: boardId, name, tasks, onLongPress, isActive }) => {
  const [modalVisibility, setModalVisibility] = useState(false)

  const handleAddTaskPress = () => {
    setModalVisibility(true)
  }

  const handleCloseModal = () => {
    setModalVisibility(false)
  }

  const handleMutationStart = () => {}

  const handleMutationEnd = () => {
    handleCloseModal()
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
      <AddTaskModal
        modalVisibility={modalVisibility}
        projectId={projectId}
        boardId={boardId}
        handleCloseModal={handleCloseModal}
        onMutationStart={handleMutationStart}
        onMutationEnd={handleMutationEnd}
      />
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
