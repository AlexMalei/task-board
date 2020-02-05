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
