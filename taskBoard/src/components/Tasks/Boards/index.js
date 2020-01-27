import React from 'react'
import { FlatList } from 'react-native'
import { useSubscription } from '@apollo/react-hooks'

import { StyledBackgroundContainer } from './component'
import { PROJECT_BOARDS_SUBSCRIPTION } from '@/subscriptions'
import Board from '@/components/Tasks/Board'
import Spinner from '@/components/Spinner'

const keyExtractor = ({ id }) => id

const renderItem = ({ item: { name, tasks } }) => {
  if (tasks.length === 0) return null
  return <Board name={name} tasks={tasks} />
}

const Boards = () => {
  //@todo: make getting projectId from params
  const exampleProjectId = 'f2bcc7b4-d1c6-472d-bf87-6e57e19033eb'

  const { data, loading } = useSubscription(PROJECT_BOARDS_SUBSCRIPTION, {
    variables: { id: exampleProjectId },
  })

  const { boards } = data?.projects_by_pk || {}

  return (
    <StyledBackgroundContainer>
      {loading ? <Spinner /> : <FlatList data={boards} renderItem={renderItem} keyExtractor={keyExtractor} />}
    </StyledBackgroundContainer>
  )
}

export default Boards
