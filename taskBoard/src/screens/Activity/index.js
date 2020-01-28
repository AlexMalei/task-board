import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

const Activity = ({ projectId }) => {
  return (
    <View>
      <Text>{projectId}</Text>
    </View>
  )
}

const mapStateToProps = ({ project: { projectId } }) => ({
  projectId,
})

export default connect(mapStateToProps, null)(Activity)
