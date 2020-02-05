import gql from 'graphql-tag'

export const INSERT_PARTICIPANT = gql`
  mutation insertParticipant($taskId: uuid!, $userId: String!) {
    insert_participants(objects: [{ user_id: $userId, task_id: $taskId }]) {
      returning {
        id
      }
    }
  }
`
