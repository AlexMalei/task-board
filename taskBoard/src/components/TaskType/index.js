import React from 'react'

import { StyledTypeLabel } from './component'

const TaskType = ({ type: { name, color, background_color } }) => {
  return <StyledTypeLabel style={{ color, backgroundColor: background_color }}>{name}</StyledTypeLabel>
}

export default TaskType
