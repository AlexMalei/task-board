import React from 'react'

import Participant from '@/forms/AddParticipant/Participant'

import { ParticipantsContainer } from './component'

const Participants = ({ participants }) => {
  return (
    <ParticipantsContainer>
      {participants.map(participant => (
        <Participant participant={participant} />
      ))}
    </ParticipantsContainer>
  )
}

export default React.memo(Participants)
