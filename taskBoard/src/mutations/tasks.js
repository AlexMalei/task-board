import gql from 'graphql-tag'

export const UPDATE_TASK_PUBLISHED_DATA = gql`
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

export const DELETE_TASK = gql`
  mutation deleteTask($taskId: uuid!) {
    delete_tasks(where: { id: { _eq: $taskId } }) {
      returning {
        id
      }
    }
    delete_comments(where: { task_id: { _eq: $taskId } }) {
      affected_rows
    }
  }
`

export const UPDATE_TASK_DATA = gql`
  mutation updateTaskData(
    $taskId: uuid!
    $name: String!
    $content: String!
    $deadline: date!
    $type_id: uuid!
    $priority: Int!
    $number: Int!
  ) {
    update_tasks(
      where: { id: { _eq: $taskId } }
      _set: {
        name: $name
        content: $content
        deadline: $deadline
        type_id: $type_id
        priority: $priority
        number: $number
      }
    ) {
      returning {
        id
      }
    }
  }
`
