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

export const INSERT_TASK = gql`
  mutation insertTask(
    $name: String!
    $content: String!
    $deadline: Date!
    $board_id: String
    $type_id: uuid!
    $user_id: uuid!
    $priority: Int!
    $number: Int!
    $published: Boolean!
  ) {
    insert_projects(
      objects: [
        {
          name: $name
          content: $content
          deadline: $deadline
          board_id: $board_id
          type_id: $type_id
          user_id: $user_id
          priority: $priority
          number: $number
          published: $published
        }
      ]
    ) {
      returning {
        id
      }
    }
  }
`
