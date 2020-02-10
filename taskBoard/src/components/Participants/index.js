import React, { useState } from 'react'
import { useSubscription } from '@apollo/react-hooks'

import Spinner from '@/components/Spinner'
import Members from '@/components/Participants/Members'
import { GET_PROJECT_PARTICIPANTS } from '@/subscriptions'

import { Container, Header, HeaderTitle, HeaderParticipantsCount, MembersContainer, Member } from './component'

const Participants = ({ projectId }) => {
  const [members, setMembers] = useState([])

  const { loading } = useSubscription(GET_PROJECT_PARTICIPANTS, {
    variables: { projectId },
    onSubscriptionData: ({
      subscriptionData: {
        data: {
          projects_by_pk: { members },
        },
      },
    }) => {
      setMembers(
        members.map(({ user }) => ({
          id: user.id,
          avatarUrl: user.avatar_url,
          displayName: user.display_name,
          role: user.role,
          countTasks:
            user.projects[0]?.boards.reduce((tasksCount, currentBoard) => {
              const {
                tasks_aggregate: {
                  aggregate: { count: currentTasksCount },
                },
              } = currentBoard || {}
              return tasksCount + currentTasksCount
            }, 0) || 0,
        })),
      )
    },
  })

  return loading ? (
    <Spinner />
  ) : (
    <Container>
      <Header>
        <HeaderTitle>Members</HeaderTitle>
        <HeaderParticipantsCount>{members.length}</HeaderParticipantsCount>
      </Header>
      <Members members={members} />
    </Container>
  )
}

export default Participants
