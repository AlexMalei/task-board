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
import AddParticipantModal from '@/components/Modals/AddParticipant'
import { getUserIdFromToken } from '@/helpers'
import { TASKS_SUBSCRIPTION } from '@/subscriptions'
import { GET_USER_DATA } from '@/queries'
import { DELETE_TASK } from '@/mutations'

import { ScreenContainer } from './component'

const initialState = {
  editModalVisibility: false,
  addParticipantModalVisibility: false,
  loadingEditTaskMutation: false,
  loadingAddParticipantMutation: false,
  loadingLoggedUser: false,
  loggedUser: {},
}

const TaskDetails = ({ navigation }) => {
  const [state, setState] = useState(initialState)

  const taskId = navigation.getParam('taskId')
  const projectId = navigation.getParam('projectId')

  const { loading: loadingTaskData, data: taskData } = useSubscription(TASKS_SUBSCRIPTION, {
    variables: { taskId },
  })

  const task = taskData?.tasks?.[0] || {}
  const { name, content, deadline, participants, created_at: creationDate, user, comments, type } = task
  const { display_name: authorName } = user || {}

  const [deleteTask] = useMutation(DELETE_TASK, {
    variables: {},
  })

  const handleTaskEditPress = () => setState({ ...state, editModalVisibility: true })

  const handleTaskDeletePress = () => {
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
  const handleAddParticipantPress = () => setState({ ...state, addParticipantModalVisibility: true })

  const handleEditTaskCloseModal = () => setState({ ...state, editModalVisibility: false })
  const handleEditTaskMutationStart = () => setState({ ...state, loadingEditTaskMutation: true })
  const handleEditTaskMutationEnd = () =>
    setState({ ...state, editModalVisibility: false, loadingEditTaskMutation: false })

  const handleAddParticipantCloseModal = () => setState({ ...state, addParticipantModalVisibility: false })
  const handleAddParticipantMutationStart = () => setState({ ...state, loadingAddParticipantMutation: true })
  const handleAddParticipantMutationEnd = () =>
    setState({ ...state, addParticipantModalVisibility: false, loadingAddParticipantMutation: false })

  const [getCurrentUser] = useLazyQuery(GET_USER_DATA, {
    variables: {},
    onCompleted: ({ users }) => {
      setState({ ...state, loggedUser: users[0], loadingLoggedUser: false })
    },
  })

  useEffect(() => {
    const getLoggedUserId = async () => {
      const currentUserId = await getUserIdFromToken()
      getCurrentUser({ variables: { userId: currentUserId } })
    }
    getLoggedUserId()
  }, [])

  const {
    editModalVisibility,
    addParticipantModalVisibility,
    loadingEditTaskMutation,
    loadingLoggedUser,
    loggedUser,
  } = state

  return loadingTaskData || loadingLoggedUser || loadingEditTaskMutation ? (
    <Spinner />
  ) : (
    <ScreenContainer contentContainerStyle={styles.screenScrollViewStyle}>
      {editModalVisibility && (
        <EditTaskModal
          modalVisibility={editModalVisibility}
          projectId={projectId}
          task={task}
          handleCloseModal={handleEditTaskCloseModal}
          onMutationStart={handleEditTaskMutationStart}
          onMutationEnd={handleEditTaskMutationEnd}
        />
      )}

      {addParticipantModalVisibility && (
        <AddParticipantModal
          modalVisibility={addParticipantModalVisibility}
          projectId={projectId}
          taskId={taskId}
          onMutationStart={handleAddParticipantMutationStart}
          onMutationEnd={handleAddParticipantMutationEnd}
          handleCloseModal={handleAddParticipantCloseModal}
        />
      )}

      <Header
        name={name}
        authorName={authorName}
        creationDate={creationDate}
        onTaskEdit={handleTaskEditPress}
        onTaskDelete={handleTaskDeletePress}
        onAddParticipant={handleAddParticipantPress}
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
