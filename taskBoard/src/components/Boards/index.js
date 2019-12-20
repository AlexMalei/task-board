import React from 'react'
import { FlatList, ActivityIndicator, TouchableOpacity, Text } from 'react-native'
import { useSubscription } from '@apollo/react-hooks'
import DraggableFlatList from 'react-native-draggable-flatlist'

import { StyledBackgroundContainer, StyledText } from './component'
import { PROJECT_BOARDS_SUBSCRIPTION } from '@/subscriptions'
import { theme } from '@/theme'
import Board from '@/components/Board'

const keyExtractor = ({ id }) => id

const renderItem = ({ item, index, drag, isActive }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: isActive ? theme.colors.lightGreen : item.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onLongPress={drag}
    >
      <Board name={item.name} />
    </TouchableOpacity>
  )
}

const Boards = () => {
  const exampleProjectId = '2fd42ceb-7341-4059-84c8-423766d3b70a'

  const { loading, error, data } = useSubscription(PROJECT_BOARDS_SUBSCRIPTION, { variables: { id: exampleProjectId } })

  const boards = data?.projects_by_pk?.boards
  console.log('boards', boards)
  return (
    <StyledBackgroundContainer>
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <DraggableFlatList
          style={{ borderColor: 'red', borderWidth: 3 }}
          data={boards}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          /* numColumns={boards.length} */
          /* onDragEnd={} */
        />
      )}
    </StyledBackgroundContainer>
  )
}

export default Boards
