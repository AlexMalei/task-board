import React from 'react'

import { DAY_CELL_MARGIN, DAY_CELL_SIZE } from '@/constants'
import { StyledDayContainer, StyledDayText, StyledCountTasks } from './component'

const DayComponent = ({ date: { day, dateString }, state, countTasks }) => {
  const isWeekend = new Date(dateString).getDay() % 6 === 0

  return (
    <StyledDayContainer cellSize={DAY_CELL_SIZE} cellMargin={DAY_CELL_MARGIN} isWeekend={isWeekend}>
      <StyledDayText style={[{ color: state === 'disabled' ? 'gray' : 'black' }]}>{day}</StyledDayText>
      {countTasks !== 0 && (
        <StyledCountTasks>{`${countTasks} ${countTasks === 1 ? 'Task' : 'Tasks'}`}</StyledCountTasks>
      )}
    </StyledDayContainer>
  )
}

export default React.memo(DayComponent)
