import React, { useState } from 'react'
import { useSubscription } from '@apollo/react-hooks'

import Avatar from '@/fields/Avatar'
import NavigationService from '@/services/Navigation'
import { GET_HEADER_PARTICIPANTS_AVATARS } from '@/subscriptions'
import { PARTICIPANTS_MAIN_PAGE_PATH } from '@/constants'
import { theme } from '@/theme'

import { ParticipantsContainer, Text, AvatarsContainer } from './component'

const ParticipantsHeader = ({ projectId }) => {
  const [participants, setParticipants] = useState([])

  const { loading } = useSubscription(GET_HEADER_PARTICIPANTS_AVATARS, {
    variables: { projectId },
    onSubscriptionData: ({
      subscriptionData: {
        data: {
          projects_by_pk: { members },
        },
      },
    }) => {
      setParticipants(
        members.map(member => ({
          avatarUrl: member.user.avatar_url,
          displayName: member.user.display_name,
        })),
      )
    },
  })

  const handleParticipantsPress = () => {
    NavigationService.navigate(PARTICIPANTS_MAIN_PAGE_PATH, { projectId })
  }

  return loading ? null : (
    <ParticipantsContainer activeOpacity={0.9} onPress={handleParticipantsPress}>
      <Text>
        {participants.length} {participants.length > 1 ? 'participants' : 'participant'}
      </Text>
      <AvatarsContainer>
        {participants.map(({ avatarUrl, displayName }) => (
          <Avatar avatarUrl={avatarUrl} displayName={displayName} size={theme.avatarSizes.xsmall} />
        ))}
      </AvatarsContainer>
    </ParticipantsContainer>
  )
}

export default ParticipantsHeader
