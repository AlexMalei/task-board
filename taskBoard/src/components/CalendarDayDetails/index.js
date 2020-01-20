import React, { useState } from 'react'
import moment from 'moment'
import { useMutation, useSubscription } from '@apollo/react-hooks'

import Task from '@/components/Task'
import Button from '@/fields/Button'
import { CALENDAR_TASKS_DETAILS_SUBSCRIPTION } from '@/subscriptions'
import { UPDATE_TASK_DATA } from '@/mutations'
import Spinner from '@/fields/Spinner'
import Modal from '@/components/Modal'
import AddTaskForm from '@/forms/AddTask'
import { INSERT_TASK } from '@/mutations'

import { StyledDayDetailsContainer, StyledHeader, StyledDate, StyledTasks } from './component'

//@todo: remove button feedback
//@todo: add route to modal window of add tasks

const CalendarDayDetails = ({ navigation }) => {
  const [modalVisibility, setModalVisibility] = useState(false)
  const [mutationLoading, setMutationLoading] = useState(false)
  const [tasks, setTasks] = useState([])

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

  const [insertTask] = useMutation(INSERT_TASK)

  const handleAddTaskPress = (name, content, deadline, board_id, type_id, user_id, priority, number, published) => {
    insertTask({ variables: { name, content, deadline, board, type, user, priority, number, published } })
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
        <AddTaskForm onCancelPress={handleCloseModal} projectId={projectId} onSubmitPress={handleAddTaskPress} />
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
