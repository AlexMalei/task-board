import React from 'react'

import { ParticipantContainer, ParticipantName, IconContainer, StyledIcon } from './component'

const Participant = ({ participant, onPress }) => {
  const { display_name } = participant
  return (
    <ParticipantContainer>
      <ParticipantName>{display_name}</ParticipantName>
      <IconContainer activeOpacity={0.8} onPress={() => onPress(participant)}>
        <StyledIcon name="close" />
      </IconContainer>
    </ParticipantContainer>
  )
}

export default Participant
