import React, { useState, useEffect } from 'react'
import { StyleSheet, Alert } from 'react-native'
import { useSubscription, useLazyQuery, useMutation } from '@apollo/react-hooks'

import Spinner from '@/components/Spinner'
import Header from '@/components/TaskDetails/Header'
import Details from '@/components/TaskDetails/Details'
import Description from '@/components/TaskDetails/Description'
import Comments from '@/components/TaskDetails/Comments'
import NavigationService from '@/services/Navigation'
import EditTaskModal from '@/components/Modals/EditTask'
import { getUserIdFromToken } from '@/helpers'
import { TASKS_SUBSCRIPTION } from '@/subscriptions'
import { GET_USER_DATA } from '@/queries'
import { DELETE_TASK } from '@/mutations'

import { ScreenContainer } from './component'

const TaskDetails = ({ navigation }) => {
  const [modalVisibility, setModalVisibility] = useState(false)
  const [loadingEditTaskMutation, setLoadingEditTaskMutation] = useState(false)
  const [loadingLoggedUser, setLoadingLoggedUser] = useState(true)
  const [loggedUser, setLoggedUser] = useState({})

  const taskId = navigation.getParam('taskId')
  const projectId = navigation.getParam('projectId')

  const handleTaskEdit = () => {
    setModalVisibility(true)
  }

  const [deleteTask] = useMutation(DELETE_TASK, {
    variables: {},
  })

  const handleTaskDelete = () => {
    Alert.alert('Do you really want to delete task?', 'This is permanent action', [
      { text: 'Cancel', onPress: () => {} },
      {
        text: 'Delete',
        onPress: () => {
          deleteTask({ variables: { taskId } })
          NavigationService.goBack()
        },
      },
    ])
  }

  const handleCloseModal = () => {
    setModalVisibility(false)
  }

  const { loading: loadingTaskData, data: taskData } = useSubscription(TASKS_SUBSCRIPTION, {
    variables: { taskId },
  })

  const [getCurrentUser] = useLazyQuery(GET_USER_DATA, {
    variables: {},
    onCompleted: ({ users }) => {
      setLoggedUser(users[0])
      setLoadingLoggedUser(false)
    },
  })

  useEffect(() => {
    const getLoggedUserId = async () => {
      const currentUserId = await getUserIdFromToken()
      getCurrentUser({ variables: { userId: currentUserId } })
    }
    getLoggedUserId()
  }, [])

  const task = taskData?.tasks?.[0] || {}
  const { name, content, deadline, participants, created_at: creationDate, user, comments, type } = task
  const { display_name: authorName } = user || {}

  const handleEndMutation = () => {
    handleCloseModal()
    setLoadingEditTaskMutation(false)
  }
  const handleStartMutation = () => {
    setLoadingEditTaskMutation(true)
  }

  return loadingTaskData || loadingLoggedUser || loadingEditTaskMutation ? (
    <Spinner />
  ) : (
    <ScreenContainer contentContainerStyle={styles.screenScrollViewStyle}>
      {modalVisibility && (
        <EditTaskModal
          projectId={projectId}
          task={task}
          handleCloseModal={handleCloseModal}
          onMutationStart={handleStartMutation}
          onMutationEnd={handleEndMutation}
        />
      )}
      <Header
        name={name}
        authorName={authorName}
        creationDate={creationDate}
        onTaskEdit={handleTaskEdit}
        onTaskDelete={handleTaskDelete}
      />
      <Details participants={participants} deadline={deadline} type={type} />
      <Description content={content} />
      <Comments user={loggedUser} comments={comments} taskId={taskId} />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  screenScrollViewStyle: {
    paddingBottom: 30,
  },
})

export default TaskDetails
