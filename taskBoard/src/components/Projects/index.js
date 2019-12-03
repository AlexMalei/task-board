import React from 'react'
import { FlatList, ActivityIndicator, Text } from 'react-native'
import { useQuery } from '@apollo/react-hooks'

import { StyledProjectsContainer, StyledPageTitle } from './component'
import { PROJECTS_QUERY } from '@/utils'
import Project from '@/components/Project'

const keyExtractor = ({ id }) => id.toString()

const renderItem = ({ item: { id, name, members, boards, background_color } }) => {
  //@todo: check correctness of counting tasks
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
  const { loading, error, data } = useQuery(PROJECTS_QUERY)
  const { projects } = data || {}

  return (
    <StyledProjectsContainer>
      <StyledPageTitle>Projects</StyledPageTitle>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>{error}</Text>}
      {!loading && !error && (
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