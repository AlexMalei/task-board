import React from 'react'
import { connect } from 'react-redux'

import ProjectTasks from '@/components/Tasks'

const Tasks = ({ projectId }) => {
  return <ProjectTasks projectId={projectId} />
}

const mapStateToProps = ({ project: { projectId } }) => ({
  projectId,
})

export default connect(mapStateToProps, null)(Tasks)
