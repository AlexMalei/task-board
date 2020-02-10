import React from 'react'
import { connect } from 'react-redux'

import ParticipantsComponent from '@/components/Participants'

const Participants = ({ projectId }) => {
  return <ParticipantsComponent projectId={projectId} />
}

const mapStateToProps = ({ project: { projectId } }) => ({
  projectId,
})

export default connect(mapStateToProps, null)(Participants)
