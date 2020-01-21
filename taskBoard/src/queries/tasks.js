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
