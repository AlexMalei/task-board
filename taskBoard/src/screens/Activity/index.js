import React from 'react'
import { connect } from 'react-redux'

import ProjectActivity from '@/components/Activity'

const Activity = ({ projectId }) => {
  return <ProjectActivity projectId={projectId} />
}

const mapStateToProps = ({ project: { projectId } }) => ({
  projectId,
})

export default connect(mapStateToProps, null)(Activity)
