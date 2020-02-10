import React from 'react'

import Avatar from '@/fields/Avatar'
import NavigationService from '@/services/Navigation'
import { theme } from '@/theme'
import { PARTICIPANT_DETAILS_PAGE_PATH } from '@/constants'

import {
  MemberContainer,
  MemberData,
  MemberAvatar,
  MemberTextData,
  MemberName,
  MemberRole,
  CompletedTasksContainer,
  CompletedTasksCount,
  CompletedTasksText,
} from './component'

const Member = ({ id, avatarUrl, displayName, role, countTasks }) => {
  const handleMemberPress = memberId => {
    NavigationService.navigate(PARTICIPANT_DETAILS_PAGE_PATH, { memberId })
  }

  return (
    <MemberContainer activeOpacity={0.9} onPress={() => handleMemberPress(id)}>
      <MemberData>
        <MemberAvatar>
          <Avatar avatarUrl={avatarUrl} size={theme.avatarSizes.small} />
          <MemberTextData>
            <MemberName>{displayName}</MemberName>
            <MemberRole>{role}</MemberRole>
          </MemberTextData>
        </MemberAvatar>
      </MemberData>
      <CompletedTasksContainer>
        <CompletedTasksCount>{countTasks}</CompletedTasksCount>
        <CompletedTasksText>Tasks</CompletedTasksText>
      </CompletedTasksContainer>
    </MemberContainer>
  )
}

export default Member
