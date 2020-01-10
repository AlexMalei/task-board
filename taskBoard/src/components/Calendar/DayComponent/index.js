import React from 'react'
import { Alert } from 'react-native'

import { DAY_CELL_MARGIN, DAY_CELL_SIZE, CALENDAR_DAY_DETAILS_PATH } from '@/constants'
import NavigationService from '@/services/Navigation'

import { StyledDayContainer, StyledDayText, StyledCountTasks } from './component'

const DayComponent = ({ date: { day, dateString }, state, countTasks, projectId }) => {
  const isWeekend = new Date(dateString).getDay() % 6 === 0

  const handlePress = () => {
    if (!!countTasks) {
      NavigationService.navigate(CALENDAR_DAY_DETAILS_PATH, { date: dateString, projectId })
    } else {
      Alert.alert('No task deadlines for this day', 'You can rest this day!')
    }
  }

  return (
    <StyledDayContainer
      cellSize={DAY_CELL_SIZE}
      cellMargin={DAY_CELL_MARGIN}
      isWeekend={isWeekend}
      onPress={handlePress}
    >
      <StyledDayText style={[{ color: state === 'disabled' ? 'gray' : 'black' }]}>{day}</StyledDayText>
      {!!countTasks && <StyledCountTasks>{`${countTasks} ${countTasks === 1 ? 'Task' : 'Tasks'}`}</StyledCountTasks>}
    </StyledDayContainer>
  )
}

export default DayComponent
