import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useMutation, useSubscription, useLazyQuery } from '@apollo/react-hooks'

import { CALENDAR_TASKS_DETAILS_SUBSCRIPTION } from '@/subscriptions'
import { INSERT_TASK_DATA, UPDATE_TASK_DATA } from '@/mutations'
import { GET_MAX_TASK_ORDER_ON_BOARD } from '@/queries'
import Task from '@/components/Task'
import Modal from '@/components/Modal'
import Button from '@/fields/Button'
import Spinner from '@/components/Spinner'
import AddTaskForm from '@/forms/AddTask'

import { StyledDayDetailsContainer, StyledHeader, StyledDate, StyledTasks } from './component'

const CalendarDayDetails = ({ navigation }) => {
  const [modalVisibility, setModalVisibility] = useState(false)
  const [mutationLoading, setMutationLoading] = useState(false)
  const [tasks, setTasks] = useState([])
  const [addingTaskData, setAddingTaskData] = useState({})

  const date = navigation.getParam('date')
  const projectId = navigation.getParam('projectId')

  const [updateTask] = useMutation(UPDATE_TASK_DATA)

  const handleCheckBoxPress = (id, published) => {
    updateTask({
      variables: {
        id,
        published: !published,
      },

      update: () => {
        setMutationLoading(true)
      },
    })
  }

  const [insertTask] = useMutation(INSERT_TASK_DATA, {
    variables: {},
    onCompleted: data => {
      setMutationLoading(false)
      handleCloseModal()
    },
  })

  const [getMaxTaskOrderOnBoard] = useLazyQuery(GET_MAX_TASK_ORDER_ON_BOARD, {
    variables: {},
    onCompleted: ({
      tasks_aggregate: {
        aggregate: {
          max: { order },
        },
      },
    }) => {
      const { name, content, deadline, boardId, typeId, userId, priority, number } = addingTaskData

      insertTask({
        variables: {
          name,
          content,
          deadline,
          board_id: boardId,
          type_id: typeId,
          user_id: userId,
          priority,
          number,
          order: order ? order + 1 : 0,
          published: true,
          archived: false,
        },
      })
    },
  })

  const handleAddTaskPress = (name, content, deadline, board, type, user, priority, number) => {
    setMutationLoading(true)

    setAddingTaskData({
      name,
      content,
      deadline,
      boardId: board.id,
      typeId: type.id,
      userId: user.id,
      priority,
      number,
    })

    getMaxTaskOrderOnBoard({
      variables: { boardId: board.id },
    })
  }

  const { loading: subscriptionLoading } = useSubscription(CALENDAR_TASKS_DETAILS_SUBSCRIPTION, {
    variables: { projectId, deadline: date },
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      setMutationLoading(false)
      let localTasks = []
      data?.projects_by_pk?.boards.forEach(({ tasks: boardTasks }) => {
        localTasks = localTasks.concat(boardTasks)
      })
      setTasks(localTasks.sort(({ orderTask1 }, { orderTask2 }) => orderTask1 - orderTask2))
    },
  })

  const handleCloseModal = () => {
    setModalVisibility(false)
  }

  return (
    <StyledDayDetailsContainer>
      <Modal isVisible={modalVisibility} onClose={handleCloseModal}>
        <AddTaskForm
          onCancelPress={handleCloseModal}
          projectId={projectId}
          onSubmitPress={handleAddTaskPress}
          selectedDate={date}
        />
      </Modal>
      <StyledHeader>
        <StyledDate>{moment(date).format('ddd, D MMM YYYY')}</StyledDate>
        <Button onPress={() => setModalVisibility(true)} disabled={subscriptionLoading || mutationLoading}>
          + Add Task
        </Button>
      </StyledHeader>
      {subscriptionLoading || mutationLoading ? (
        <Spinner />
      ) : (
        <StyledTasks showsVerticalScrollIndicator={false}>
          {tasks.map(task => (
            <Task key={task.id} task={task} checkBoxVisibility={true} onCheckBoxPress={handleCheckBoxPress} />
          ))}
        </StyledTasks>
      )}
    </StyledDayDetailsContainer>
  )
}

export default CalendarDayDetails
