import gql from 'graphql-tag'

export const UPDATE_BOARD_ORDER = gql`
  mutation updateBoardOrder($id: uuid!, $order: Int!) {
    update_boards(where: { id: { _eq: $id } }, _set: { order: $order }) {
      returning {
        id
      }
    }
  }
`
