import gql from 'graphql-tag'

export const GET_MAX_TASK_ORDER_ON_BOARD = gql`
  query getMaxTaskOrderOnBoard($boardId: uuid!) {
    tasks_aggregate(where: { board_id: { _eq: $boardId } }) {
      aggregate {
        max {
          order
        }
      }
    }
  }
`

export const GET_DATA_CREATED_TASKS = gql`
  query getDataCreatedTasks($id: uuid!) {
    tasks(order_by: { created_at: desc }, where: { board: { project_id: { _eq: $id } } }) {
      created_at
      name
      user {
        display_name
      }
    }
  }
`
