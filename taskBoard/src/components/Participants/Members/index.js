import React from 'react'

import Member from '@/components/Participants/Member'

import { MembersContainer } from './component'

const Members = ({ members }) => {
  return (
    <MembersContainer>
      {members.map(({ id, avatarUrl, displayName, role, countTasks }) => (
        <Member id={id} avatarUrl={avatarUrl} displayName={displayName} role={role} countTasks={countTasks} />
      ))}
    </MembersContainer>
  )
}

export default Members
