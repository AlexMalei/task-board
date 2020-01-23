import React from 'react'
import { StyleSheet } from 'react-native'
import { useSubscription } from '@apollo/react-hooks'

import Spinner from '@/components/Spinner'
import Header from '@/components/TaskDetails/Header'
import Details from '@/components/TaskDetails/Details'
import Description from '@/components/TaskDetails/Description'
import Comments from '@/components/TaskDetails/Comments'
import { TASKS_SUBSCRIPTION } from '@/subscriptions'

import { ScreenContainer } from './component'

const TaskDetails = ({ navigation }) => {
  const taskId = navigation.getParam('taskId')
  console.log('taskId', taskId)

  const { loading, data: taskData } = useSubscription(TASKS_SUBSCRIPTION, {
    variables: { taskId },
  })
  console.log('taskData', taskData)
  const { name, content, deadline, participants, created_at: creationDate, user, comments, type } =
    taskData?.tasks?.[0] || {}

  const { display_name: authorName } = user || {}

  return loading ? (
    <Spinner />
  ) : (
    <ScreenContainer contentContainerStyle={styles.screenScrollViewStyle}>
      <Header name={name} authorName={authorName} creationDate={creationDate} />
      <Details participants={participants} deadline={deadline} type={type} />
      <Description content={content} />
      <Comments user={user} comments={comments} />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  screenScrollViewStyle: {
    paddingBottom: 30,
  },
})

export default TaskDetails
