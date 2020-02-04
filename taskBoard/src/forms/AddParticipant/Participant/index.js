import React from 'react'

import { ParticipantContainer, ParticipantName, IconContainer, StyledIcon } from './component'

const Participant = ({ participant: { display_name }, onPress }) => {
  return (
    <ParticipantContainer>
      <ParticipantName>{display_name}</ParticipantName>
      <IconContainer
        activeOpacity={0.8}
        onPress={
          /* onPress */ () => {
            console.log('123', 123)
          }
        }
      >
        <StyledIcon name="close" />
      </IconContainer>
    </ParticipantContainer>
  )
}

export default Participant
