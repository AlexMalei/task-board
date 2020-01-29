import React, { useState } from 'react'
import { useMutation, useLazyQuery } from '@apollo/react-hooks'

import Modal from '@/components/Modal'
import AddTaskForm from '@/forms/AddTask'
import { INSERT_TASK_DATA } from '@/mutations'
import { GET_MAX_TASK_ORDER_ON_BOARD } from '@/queries'
import { getUserIdFromToken } from '@/helpers'

const AddTaskModal = ({
  modalVisibility,
  projectId,
  boardId,
  selectedDate,
  onMutationStart,
  onMutationEnd,
  handleCloseModal,
}) => {
  const [addingTaskData, setAddingTaskData] = useState({})
  const [insertTask] = useMutation(INSERT_TASK_DATA, {
    variables: {},
    onCompleted: data => {
      onMutationEnd()
    },
  })

  const [getMaxTaskOrderOnBoard] = useLazyQuery(GET_MAX_TASK_ORDER_ON_BOARD, {
    variables: {},
    fetchPolicy: 'network-only',
    onCompleted: async ({
      tasks_aggregate: {
        aggregate: {
          max: { order },
        },
      },
    }) => {
      const currentUserId = await getUserIdFromToken()
      const { name, content, deadline, boardId, typeId, priority, number } = addingTaskData

      insertTask({
        variables: {
          name,
          content,
          deadline,
          board_id: boardId,
          type_id: typeId,
          user_id: currentUserId,
          priority,
          number,
          order: order ? order + 1 : 0,
          published: true,
          archived: false,
        },
      })
    },
  })

  const handleAddTaskPress = (name, content, deadline, board, type, priority, number) => {
    onMutationStart()

    setAddingTaskData({
      name,
      content,
      deadline,
      boardId: boardId || board.id,
      typeId: type.id,
      priority,
      number,
    })

    getMaxTaskOrderOnBoard({
      variables: { boardId: boardId || board.id },
    })
  }

  return (
    <Modal isVisible={modalVisibility} onClose={handleCloseModal}>
      <AddTaskForm
        onCancelPress={handleCloseModal}
        projectId={projectId}
        needChooseBoard={!boardId}
        onSubmitPress={handleAddTaskPress}
        selectedDate={selectedDate}
      />
    </Modal>
  )
}

AddTaskModal.defaultProps = {
  boardId: null,
  selectedDate: new Date(),
  onMutationStart: () => {},
  onMutationEnd: () => {},
}

export default AddTaskModal
