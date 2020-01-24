import gql from 'graphql-tag'

export const TASKS_SUBSCRIPTION = gql`
  subscription TasksSubscription($taskId: uuid!) {
    tasks(where: { id: { _eq: $taskId } }) {
      name
      content
      deadline
      created_at
      participants {
        user {
          id
          display_name
          avatar_url
        }
      }
      user {
        id
        avatar_url
        display_name
      }
      comments(order_by: { created_at: desc }) {
        created_at
        content
        user {
          display_name
          avatar_url
          role
        }
      }
      type {
        color
        background_color
        name
      }
    }
  }
`
