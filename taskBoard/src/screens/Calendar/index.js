import React from 'react'
import { connect } from 'react-redux'

import Calendar from '@/components/Calendar'

const CalendarScreen = ({ projectId }) => {
  return <Calendar projectId={projectId} />
}

const mapStateToProps = ({ project: { projectId } }) => ({
  projectId,
})

export default connect(mapStateToProps)(CalendarScreen)
