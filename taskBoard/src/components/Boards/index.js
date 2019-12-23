import React, { useState, useEffect } from 'react'
import { FlatList, ActivityIndicator, TouchableOpacity, Text } from 'react-native'
import { useSubscription, useMutation } from '@apollo/react-hooks'
import DraggableFlatList from 'react-native-draggable-flatlist'

import { StyledBackgroundContainer, StyledText } from './component'
import { PROJECT_BOARDS_SUBSCRIPTION } from '@/subscriptions'
import { UPDATE_BOARD_ORDER } from '@/mutations'
import { theme } from '@/theme'
import Board from '@/components/Board'

const keyExtractor = ({ id }) => id

const renderItem = ({ item, drag, isActive }) => {
  return <Board name={item.name} onLongPress={drag} isActive={isActive} />
}

const orderSortCallback = (first, second) => first.order - second.order

//@todo: after mutation subscription might lead to changing layout (or even blinking without changing data (??) )
//@todo: to avoid this must use React.memo with function, that check changes in received data and try to avoid unnecessary re-renderings

const Boards = () => {
  const exampleProjectId = '2fd42ceb-7341-4059-84c8-423766d3b70a'
  const [localBoards, setLocalBoards] = useState([])

  const { loading, error, data } = useSubscription(PROJECT_BOARDS_SUBSCRIPTION, {
    variables: { id: exampleProjectId },
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      const boards = data?.projects_by_pk?.boards

      if (boards /*&& localBoards.length === 0*/) {
        setLocalBoards(boards.sort(orderSortCallback))
      }
    },
  })

  const [updateBoardOrder] = useMutation(UPDATE_BOARD_ORDER)
  const handleUpdateBoardOrder = (id, order) => {
    updateBoardOrder({ variables: { id, order } })
  }

  const handleDragEnd = ({ data: dragListData }) => {
    dragListData.forEach((board, index) => {
      if (board.order !== index) {
        board.order = index
        handleUpdateBoardOrder(board.id, board.order)
      }
    })

    setLocalBoards(dragListData)
  }

  return (
    <StyledBackgroundContainer>
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <DraggableFlatList
          data={localBoards}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onDragEnd={handleDragEnd}
        />
      )}
    </StyledBackgroundContainer>
  )
}

export default Boards
