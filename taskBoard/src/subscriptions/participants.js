import gql from 'graphql-tag'

export const GET_USERS_FOR_ADDING_PARTICIPANTS = gql`
  subscription getUsersForAddingParticipants($projectId: uuid!, $taskId: uuid!) {
    projects_by_pk(id: $projectId) {
      boards(where: { tasks: { id: { _eq: $taskId } } }) {
        tasks(where: { id: { _eq: $taskId } }) {
          participants {
            user {
              id
              display_name
            }
          }
        }
      }
      members {
        user {
          id
          display_name
        }
      }
    }
  }
`

export const GET_HEADER_PARTICIPANTS_AVATARS = gql`
  subscription getHeaderParticipantsAvatars($projectId: uuid!) {
    projects_by_pk(id: $projectId) {
      members(limit: 3) {
        user {
          display_name
          avatar_url
        }
      }
    }
  }
`

export const GET_PROJECT_PARTICIPANTS = gql`
  subscription getProjectParticipants($projectId: uuid!) {
    projects_by_pk(id: $projectId) {
      members {
        user {
          id
          display_name
          avatar_url
          role
          projects(where: { id: { _eq: $projectId } }) {
            boards {
              tasks_aggregate {
                aggregate {
                  count
                }
              }
            }
          }
        }
      }
    }
  }
`

export const GET_PARTICIPANT_DETAILS = gql`
  subscription getParticipantDetails($memberId: String!) {
    users_by_pk(id: $memberId) {
      display_name
      avatar_url
      role
    }
  }
`
