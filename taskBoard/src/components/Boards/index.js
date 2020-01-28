import React, { useState } from 'react'
import { useSubscription, useMutation } from '@apollo/react-hooks'
import DraggableFlatList from 'react-native-draggable-flatlist'

import { StyledBackgroundContainer } from './component'
import { PROJECT_BOARDS_SUBSCRIPTION } from '@/subscriptions'
import { UPDATE_BOARD_ORDER } from '@/mutations'
import Board from '@/components/Board'
import Spinner from '@/components/Spinner'

const keyExtractor = ({ id }) => id

const renderItem = ({ item: { name, tasks }, drag, isActive }) => {
  return <Board name={name} onLongPress={drag} isActive={isActive} tasks={tasks} />
}

const orderSortCallback = (first, second) => first.order - second.order

//@todo: after mutation subscription might lead to changing layout (or even blinking without changing data (??) )
//@todo: to avoid this must use React.memo with function, that check changes in received data and try to avoid unnecessary re-renderings

const Boards = ({ projectId }) => {
  const [localBoards, setLocalBoards] = useState([])

  const { loading } = useSubscription(PROJECT_BOARDS_SUBSCRIPTION, {
    variables: { id: projectId },
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
        <Spinner />
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
