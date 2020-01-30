import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import moment from 'moment'

import TaskType from '@/components/TaskType'
import Avatar from '@/fields/Avatar'
import { theme } from '@/theme'
import {
  DetailsSectionContainer,
  DetailsItemContainer,
  ItemLabel,
  ParticipantsContentContainer,
  ParticipantAddIconContainer,
  ParticipantAddIcon,
  DeadlineContent,
} from './component'

const AVATAR_BORDER_WIDTH = 1
const AVATAR_SIZE = theme.avatarSizes.xsmall + AVATAR_BORDER_WIDTH

const Details = ({ participants, deadline, type }) => {
  const [allParticipantsShow, setAllParticipantsShow] = useState(false)
  const firstParticipantsToShow = participants.slice(0, 3)

  const handleAllParticipantsShow = () => {
    setAllParticipantsShow(!allParticipantsShow)
  }

  const renderParticipants = participants => {
    return participants.map(participant => (
      <Avatar
        size={AVATAR_SIZE}
        avatarUrl={participant.user.avatar_url}
        userName={participant.user.display_name}
        containerStyle={styles.avatarContainer}
        avatarStyle={styles.avatar}
      />
    ))
  }

  return (
    <DetailsSectionContainer>
      <DetailsItemContainer>
        <ItemLabel>Asign to</ItemLabel>
        <ParticipantsContentContainer>
          {allParticipantsShow ? renderParticipants(participants) : renderParticipants(firstParticipantsToShow)}
          {participants.length > 3 && (
            <ParticipantAddIconContainer>
              <ParticipantAddIcon
                /*  size={AVATAR_SIZE} */
                name={allParticipantsShow ? 'minus' : 'plus'}
                onPress={handleAllParticipantsShow}
              />
            </ParticipantAddIconContainer>
          )}
        </ParticipantsContentContainer>
      </DetailsItemContainer>

      <DetailsItemContainer>
        <ItemLabel>Due on</ItemLabel>
        <DeadlineContent>{moment(deadline).format('ddd, MMM DD')}</DeadlineContent>
      </DetailsItemContainer>

      <DetailsItemContainer>
        <ItemLabel>Type</ItemLabel>
        <TaskType type={type} />
      </DetailsItemContainer>
    </DetailsSectionContainer>
  )
}

const styles = StyleSheet.create({
  avatarContainer: {
    marginHorizontal: 1,
  },
  avatar: {
    borderRadius: AVATAR_SIZE / 2,
    borderColor: 'transparent',
    borderWidth: 1,
  },
})

export default Details
