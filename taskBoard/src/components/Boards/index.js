import React, { useState, useRef } from 'react'
import { ActivityIndicator, PanResponder } from 'react-native'
import { useSubscription, useMutation } from '@apollo/react-hooks'
import DraggableFlatList from 'react-native-draggable-flatlist'

import { StyledBackgroundContainer } from './component'
import { PROJECT_BOARDS_SUBSCRIPTION } from '@/subscriptions'
import { UPDATE_BOARD_ORDER } from '@/mutations'
import Board from '@/components/Board'

const keyExtractor = ({ id }) => id

const renderItem = ({ item: { name, tasks }, drag, isActive }) => {
  return <Board name={name} onLongPress={drag} isActive={isActive} tasks={tasks} />
}

const orderSortCallback = (first, second) => first.order - second.order

//@todo: after mutation subscription might lead to changing layout (or even blinking without changing data (??) )
//@todo: to avoid this must use React.memo with function, that check changes in received data and try to avoid unnecessary re-renderings

const Boards = () => {
  const exampleProjectId = '2fd42ceb-7341-4059-84c8-423766d3b70a'
  const [localBoards, setLocalBoards] = useState([])

  const { loading } = useSubscription(PROJECT_BOARDS_SUBSCRIPTION, {
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

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => {
      console.log('capturing')
      return true
    },

    onStartShouldSetPanResponderCapture: (evt, gestureState) => {
      console.log('capturing')
      return true
    },

    onMoveShouldSetPanResponder: (evt, gestureState) => {
      console.log('move set responder')
      return true
    },

    onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
      console.log('move capturing')
      return true
    },

    onPanResponderGrant: (evt, gestureState) => {
      console.log('\nPan Responder Grant')
      console.log('=========================================')
    },

    onPanResponderMove: (evt, gestureState) => {
      console.log('move')
    },

    onPanResponderTerminationRequest: (evt, gestureState) => {
      console.log('terminate request')
      return true
    },

    onPanResponderRelease: (evt, gestureState) => {
      console.log('release')
    },

    onPanResponderTerminate: (evt, gestureState) => {
      console.log('terminate')
    },

    onShouldBlockNativeResponder: (evt, gestureState) => {
      console.log('native block')
      return true
    },
  })

  return (
    <StyledBackgroundContainer>
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <DraggableFlatList
          /* {...panResponder.panHandlers} */
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
