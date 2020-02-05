import React from 'react'

import Participant from '@/forms/AddParticipant/Participant'

import { ParticipantsContainer } from './component'

const Participants = ({ participants, onDeleteParticipant }) => {
  return (
    <ParticipantsContainer>
      {participants.map(participant => (
        <Participant participant={participant} onPress={onDeleteParticipant} />
      ))}
    </ParticipantsContainer>
  )
}

export default React.memo(Participants)
