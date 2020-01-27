import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { useSubscription } from '@apollo/react-hooks'
import { CalendarList } from 'react-native-calendars'

import { CALENDAR_TASKS_COUNT_SUBSCRIPTIONS } from '@/subscriptions'
import { theme } from '@/theme'
import { DAY_CELL_MARGIN, DAY_CELL_SIZE, AMOUNT_MONTH_TO_SCROLL } from '@/constants'
import Spinner from '@/components/Spinner'

import DayComponent from './DayComponent'

const CALENDAR_MAIN_STYLES_KEY = 'stylesheet.calendar.main'
const CALENDAR_HEADER_STYLES_KEY = 'stylesheet.calendar.header'

//@todo: fix calendar days in bottom of month

const Calendar = () => {
  //@todo: make getting projectId from params
  const exampleProjectId = '425c8285-df19-4178-833f-c7b8a4042ad7'
  const [deadlineTasksMapObject, setDeadlineTasksMapObject] = useState({})

  const { loading } = useSubscription(CALENDAR_TASKS_COUNT_SUBSCRIPTIONS, {
    variables: { projectId: exampleProjectId },
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      let deadlineTasksMapObject = {}

      data?.projects_by_pk?.boards.forEach(({ tasks }) => {
        tasks.forEach(task => {
          const { deadline } = task
          deadlineTasksMapObject[deadline]
            ? deadlineTasksMapObject[deadline].push(task)
            : (deadlineTasksMapObject[deadline] = new Array(task))
        })
      })

      setDeadlineTasksMapObject(deadlineTasksMapObject)
    },
  })

  return loading ? (
    <Spinner />
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
          week: styles.headerWeekContainer,
        },
      }}
      pastScrollRange={AMOUNT_MONTH_TO_SCROLL}
      futureScrollRange={AMOUNT_MONTH_TO_SCROLL}
      scrollEnabled={true}
      dayComponent={({ date, state }) => {
        const tasksByDate = deadlineTasksMapObject[date.dateString]
        return <DayComponent date={date} state={state} countTasks={tasksByDate?.length} projectId={exampleProjectId} />
      }}
      firstDay={1}
      hideExtraDays={true}
      markedDates={{ deadlineTasksMapObject }}
    />
  )
}

const styles = StyleSheet.create({
  mainWeekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: DAY_CELL_MARGIN,
    marginBottom: DAY_CELL_MARGIN,
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
    paddingBottom: 5,

    fontSize: theme.fontSizes[1],
    fontFamily: theme.font,
    fontWeight: `${theme.fontWeights.bold}`,

    color: theme.colors.codGray,
    textAlign: 'left',
  },
  headerWeekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,

    borderBottomColor: theme.colors.lightGrey,
    borderBottomWidth: 1,
  },
})

export default Calendar
