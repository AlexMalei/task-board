import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

import Button from '@/fields/Button'
import Task from '@/components/Task'
import NavigationService from '@/services/Navigation'
import AddTaskModal from '@/components/Modals/AddTask'
import { TASKS_DETAILS_PAGE_PATH } from '@/constants'

import { StyledContainer, StyledTitle, StyledBoardHeader, StyledTasksContainer } from './component'

const Board = ({ id: boardId, name, tasks, projectId }) => {
  const [modalVisibility, setModalVisibility] = useState(false)

  const handleAddTaskPress = () => {
    setModalVisibility(true)
  }

  const handleTaskPress = taskId => {
    NavigationService.navigate(TASKS_DETAILS_PAGE_PATH, { taskId })
  }

  const handleCloseModal = () => {
    setModalVisibility(false)
  }

  return (
    <StyledContainer activeOpacity={0.8}>
      <AddTaskModal
        modalVisibility={modalVisibility}
        projectId={projectId}
        boardId={boardId}
        handleCloseModal={handleCloseModal}
        onMutationEnd={handleCloseModal}
      />
      <StyledBoardHeader>
        <StyledTitle>{name}</StyledTitle>
        <Button onPress={handleAddTaskPress}>+ Add Task</Button>
      </StyledBoardHeader>
      <StyledTasksContainer>
        {tasks.length !== 0 &&
          tasks.map(({ id, ...task }) => (
            <Task key={id} task={task} onPress={() => handleTaskPress(id)} containerType={TouchableOpacity} />
          ))}
      </StyledTasksContainer>
    </StyledContainer>
  )
}

export default Board
