import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import CalendarScreen from '@/screens/Calendar'
import CalendarDayDetails from '@/components/CalendarDayDetails'
import { CALENDAR_MAIN_PAGE_PATH, CALENDAR_DAY_DETAILS_PATH } from '@/constants'

const CalendarNavigator = createStackNavigator(
  {
    [CALENDAR_MAIN_PAGE_PATH]: CalendarScreen,
    [CALENDAR_DAY_DETAILS_PATH]: CalendarDayDetails,
  },
  {
    initialRouteName: CALENDAR_MAIN_PAGE_PATH,
    headerMode: 'none',
  },
)

export default CalendarNavigator
