import React from 'react'
import { TouchableOpacity } from 'react-native'

import Button from '@/fields/Button'
import Task from '@/components/Task'
import NavigationService from '@/services/Navigation'
import { TASKS_DETAILS_PAGE_PATH } from '@/constants'

import { StyledContainer, StyledTitle, StyledBoardHeader, StyledTasksContainer } from './component'

const Board = ({ name, tasks }) => {
  const handleAddTaskPress = taskId => {
    NavigationService.navigate(TASKS_DETAILS_PAGE_PATH, { taskId })
  }

  return (
    <StyledContainer activeOpacity={0.8}>
      <StyledBoardHeader>
        <StyledTitle>{name}</StyledTitle>
        <Button onPress={handleAddTaskPress}>+ Add Task</Button>
      </StyledBoardHeader>
      <StyledTasksContainer>
        {tasks.length !== 0 &&
          tasks.map(({ id, ...task }) => (
            <Task key={id} task={task} onPress={() => handleAddTaskPress(id)} containerType={TouchableOpacity} />
          ))}
      </StyledTasksContainer>
    </StyledContainer>
  )
}

export default Board
