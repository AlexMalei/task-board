import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { useSubscription } from '@apollo/react-hooks'
import { CalendarList } from 'react-native-calendars'

import { CALENDAR_TASKS_SUBSCRIPTIONS } from '@/subscriptions'
import { theme } from '@/theme'
import { DAY_CELL_MARGIN, DAY_CELL_SIZE, AMOUNT_MONTH_TO_SCROLL } from '@/constants'
import DayComponent from './DayComponent'

const CALENDAR_MAIN_STYLES_KEY = 'stylesheet.calendar.main'
const CALENDAR_HEADER_STYLES_KEY = 'stylesheet.calendar.header'

const Calendar = () => {
  const exampleProjectId = 'f2bcc7b4-d1c6-472d-bf87-6e57e19033eb'
  const [deadlineDots, setDeadlineDots] = useState({})
  const [allTasks, setAllTasks] = useState([])

  const dotTaskConfig = { key: 'task', color: 'red' }

  const mapDeadlineToDot = (dotsObject, deadline) => {
    dotsObject[deadline]
      ? dotsObject[deadline].dots.push(dotTaskConfig)
      : (dotsObject[deadline] = { dots: [dotTaskConfig] })
  }

  const { loading } = useSubscription(CALENDAR_TASKS_SUBSCRIPTIONS, {
    variables: { projectId: exampleProjectId },
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      let taskDeadlineDotsConfig = {}
      let allTasksArray = []

      data?.projects_by_pk?.boards.forEach(({ tasks }) => {
        allTasksArray = allTasksArray.concat(tasks)

        tasks.forEach(({ deadline }) => {
          mapDeadlineToDot(taskDeadlineDotsConfig, deadline)
        })
      })
      setAllTasks(allTasksArray)
      setDeadlineDots(taskDeadlineDotsConfig)
    },
  })

  const filterTasksByDate = pressedDay => {
    return allTasks.filter(task => task.deadline === pressedDay)
  }

  return loading ? (
    <ActivityIndicator size="large" />
  ) : (
    <CalendarList
      theme={{
        [CALENDAR_MAIN_STYLES_KEY]: {
          week: styles.mainWeekRow,
        },
        [CALENDAR_HEADER_STYLES_KEY]: {
          monthText: styles.headerMonthText,
          header: styles.header,
          dayHeader: styles.headerDayWeek,
        },
      }}
      pastScrollRange={AMOUNT_MONTH_TO_SCROLL}
      futureScrollRange={AMOUNT_MONTH_TO_SCROLL}
      scrollEnabled={true}
      dayComponent={({ date, state }) => {
        const tasksByDate = filterTasksByDate(date.dateString)
        return <DayComponent date={date} state={state} countTasks={tasksByDate.length} />
      }}
      firstDay={1}
      markingType={'multi-dot'}
      hideExtraDays={true}
      markedDates={{ deadlineDots }}
    />
  )
}

const styles = StyleSheet.create({
  mainWeekRow: {
    marginTop: DAY_CELL_MARGIN,
    marginBottom: DAY_CELL_MARGIN,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  headerMonthText: {
    fontSize: theme.fontSizes[4],
    fontFamily: theme.font,
    fontWeight: `${theme.fontWeights.bold}`,
    color: theme.colors.codGray,
  },

  header: {
    justifyContent: 'flex-start',
  },

  headerDayWeek: {
    width: DAY_CELL_SIZE,

    fontSize: theme.fontSizes[1],
    fontFamily: theme.font,
    fontWeight: theme.fontSizes.bold,

    color: theme.colors.codGray,
    textAlign: 'left',
  },
})

export default Calendar
