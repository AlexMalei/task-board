import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import { StyledProjectContainer, StyledText, StyledProjectTitle } from './component'

const Project = ({ name, membersCount, boardsCount, tasksCount, color }) => {
  return (
    <StyledProjectContainer style={[{ backgroundColor: color }]}>
      <StyledProjectTitle>{name}</StyledProjectTitle>
      <StyledText>Members: {membersCount}</StyledText>
      <StyledText>Boards: {boardsCount}</StyledText>
      <StyledText>Tasks: {tasksCount}</StyledText>
    </StyledProjectContainer>
  )
}

Project.defaultProps = {
  color: '#E89A68',
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  membersCount: PropTypes.number.isRequired,
  boardsCount: PropTypes.number.isRequired,
  tasksCount: PropTypes.number.isRequired,
  color: PropTypes.string,
}

export default Project
