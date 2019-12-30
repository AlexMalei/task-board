import React, { useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { useSubscription } from '@apollo/react-hooks'
import { Calendar as ReactCalendar, CalendarList, Agenda } from 'react-native-calendars'

import { CALENDAR_TASKS_SUBSCRIPTIONS } from '@/subscriptions'

const Calendar = () => {
  const exampleProjectId = 'f2bcc7b4-d1c6-472d-bf87-6e57e19033eb'
  const [deadlineDots, setDeadlineDots] = useState({})
  const [taskDetailsVisibility, setTaskDetailsVisibility] = useState(false)
  const [pressedDay, setPressedDay] = useState('')

  const dotTaskConfig = { key: 'task', color: 'red' }

  const mapDeadlineToDot = (dotsObject, deadline) => {
    dotsObject[deadline]
      ? dotsObject[deadline].dots.push(dotTaskConfig)
      : (dotsObject[deadline] = { dots: [dotTaskConfig] })
  }

  const { loading } = useSubscription(CALENDAR_TASKS_SUBSCRIPTIONS, {
    variables: { projectId: exampleProjectId },
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      //@todo: make saving all data locally(needed display current day tasks)
      let taskDeadlineDotsConfig = {}

      data?.projects_by_pk?.boards.forEach(board => {
        board.tasks.forEach(({ deadline }) => {
          mapDeadlineToDot(taskDeadlineDotsConfig, deadline)
        })
      })

      setDeadlineDots(taskDeadlineDotsConfig)
      console.log('taskDeadlineDotsConfig', taskDeadlineDotsConfig)
    },
  })

  const handlePressDay = ({ dateString }) => {
    console.log('dateString', dateString)
    setTaskDetailsVisibility(true)
    setPressedDay(dateString)
  }

  return loading ? (
    <ActivityIndicator size="large" />
  ) : (
    //@todo: make showing tasks on pressed day
    //@todo: make possibility to close list of tasks
    <React.Fragment>
      <ReactCalendar
        firstDay={1}
        markingType={'multi-dot'}
        hideExtraDays={true}
        markedDates={deadlineDots}
        onDayPress={handlePressDay}
      />

      {taskDetailsVisibility && <FlatList />}
    </React.Fragment>
  )
}

export default Calendar
