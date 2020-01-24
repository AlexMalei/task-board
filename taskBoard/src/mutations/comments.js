import gql from 'graphql-tag'

export const ADD_COMMENT = gql`
  mutation addComment($content: String!, $userId: String!, $taskId: uuid!) {
    insert_comments(objects: { content: $content, task_id: $taskId, user_id: $userId }) {
      returning {
        id
      }
    }
  }
`
