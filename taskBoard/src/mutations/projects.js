import gql from 'graphql-tag'

export const ADD_PROJECT = gql`
  mutation addProject($user_id: String!, $name: String, $background_color: String, $task_prefix: String) {
    insert_projects(
      objects: [{ user_id: $user_id, name: $name, background_color: $background_color, task_prefix: $task_prefix }]
    ) {
      returning {
        id
      }
    }
  }
`
