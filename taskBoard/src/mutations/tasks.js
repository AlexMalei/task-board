import gql from 'graphql-tag'

export const UPDATE_TASK_DATA = gql`
  mutation updateTask($id: uuid!, $published: Boolean) {
    update_tasks(where: { id: { _eq: $id } }, _set: { published: $published }) {
      returning {
        id
        published
      }
    }
  }
`

export const INSERT_TASK_DATA = gql`
  mutation insertTaskData(
    $name: String!
    $content: String!
    $deadline: date!
    $board_id: uuid!
    $type_id: uuid!
    $user_id: String!
    $priority: Int!
    $number: Int!
    $order: Int!
    $published: Boolean!
    $archived: Boolean!
  ) {
    insert_tasks(
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
          order: $order
          published: $published
          archived: $archived
        }
      ]
    ) {
      returning {
        id
      }
    }
  }
`
