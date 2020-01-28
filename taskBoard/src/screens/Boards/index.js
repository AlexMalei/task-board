import React from 'react'
import { connect } from 'react-redux'

import ProjectBoards from '@/components/Boards'

const Boards = ({ projectId }) => {
  return <ProjectBoards projectId={projectId} />
}

const mapStateToProps = ({ project: { projectId } }) => ({
  projectId,
})

export default connect(mapStateToProps, null)(Boards)
