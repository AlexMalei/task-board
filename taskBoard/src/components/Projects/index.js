import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSubscription } from '@apollo/react-hooks'

import { PROJECTS_SUBSCRIPTION } from '@/subscriptions'
import Project from '@/components/Project'
import Spinner from '@/components/Spinner'

import { StyledProjectsContainer, StyledPageTitle } from './component'

const keyExtractor = ({ id }) => id.toString()

const renderItem = ({ item: { id, name, members, boards, background_color } }) => {
  const countTasks = boards.reduce((countTasks, board) => (countTasks += board.tasks.length), 0)

  return (
    <Project
      id={id}
      name={name}
      membersCount={members.length}
      color={background_color}
      boardsCount={boards.length}
      tasksCount={countTasks}
    />
  )
}

const Projects = () => {
  const { loading, data } = useSubscription(PROJECTS_SUBSCRIPTION)
  const { projects } = data || {}

  return (
    <StyledProjectsContainer>
      <StyledPageTitle>Projects</StyledPageTitle>
      {loading ? (
        <Spinner />
      ) : (
        <FlatList
          data={projects}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      )}
    </StyledProjectsContainer>
  )
}

export default Projects
