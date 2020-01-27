import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useSubscription, useLazyQuery } from '@apollo/react-hooks'

import Spinner from '@/components/Spinner'
import Header from '@/components/TaskDetails/Header'
import Details from '@/components/TaskDetails/Details'
import Description from '@/components/TaskDetails/Description'
import Comments from '@/components/TaskDetails/Comments'
import { getUserIdFromToken } from '@/helpers'
import { TASKS_SUBSCRIPTION } from '@/subscriptions'
import { GET_USER_DATA } from '@/queries'

import { ScreenContainer } from './component'

//@todo: make logged user data
const TaskDetails = ({ navigation }) => {
  const [loadingLoggedUser, setLoadingLoggedUser] = useState(true)
  const [loggedUser, setLoggedUser] = useState({})
  const taskId = navigation.getParam('taskId')

  const { loading, data: taskData } = useSubscription(TASKS_SUBSCRIPTION, {
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

  const { name, content, deadline, participants, created_at: creationDate, user, comments, type } =
    taskData?.tasks?.[0] || {}
  const { display_name: authorName } = user || {}

  return loading || loadingLoggedUser ? (
    <Spinner />
  ) : (
    <ScreenContainer contentContainerStyle={styles.screenScrollViewStyle}>
      <Header name={name} authorName={authorName} creationDate={creationDate} />
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
