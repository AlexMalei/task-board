import React from 'react'
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

const Details = ({ participants, deadline, type }) => {
  return (
    <DetailsSectionContainer>
      <DetailsItemContainer>
        <ItemLabel>Asign to</ItemLabel>
        <ParticipantsContentContainer>
          {/*@todo: show only 3-4 users and button*/}
          {participants.map(participant => (
            <Avatar
              size={theme.avatarSizes.xsmall}
              avatarUrl={participant.user.avatar_url}
              userName={participant.user.display_name}
              containerStyle={styles.avatarContainer}
            />
          ))}
          <ParticipantAddIconContainer>
            <ParticipantAddIcon name="plus" />
          </ParticipantAddIconContainer>
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
})

export default Details
