import React, { useState } from 'react'
import moment from 'moment'
import { useMutation, useSubscription } from '@apollo/react-hooks'

import Task from '@/components/Task'
import Button from '@/fields/Button'
import Spinner from '@/components/Spinner'
import AddTaskModal from '@/components/Modals/AddTask'
import { CALENDAR_TASKS_DETAILS_SUBSCRIPTION } from '@/subscriptions'
import { UPDATE_TASK_DATA } from '@/mutations'

import { StyledDayDetailsContainer, StyledHeader, StyledDate, StyledTasks } from './component'

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

  const handleMutationStart = () => {
    setMutationLoading(true)
  }

  const handleMutationEnd = () => {
    setMutationLoading(false)
    handleCloseModal()
  }

  return (
    <StyledDayDetailsContainer>
      <AddTaskModal
        modalVisibility={modalVisibility}
        projectId={projectId}
        handleCloseModal={handleCloseModal}
        selectedDate={date}
        onMutationStart={handleMutationStart}
        onMutationEnd={handleMutationEnd}
      />
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
