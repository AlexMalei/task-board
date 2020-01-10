import gql from 'graphql-tag'

export const UPDATE_PROFILE_DATA = gql`
  mutation updateProfileData($id: String!, $name: String, $role: String, $about: String) {
    update_users(where: { id: { _eq: $id } }, _set: { role: $role, about_me: $about, display_name: $name }) {
      returning {
        id
      }
    }
  }
`
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
