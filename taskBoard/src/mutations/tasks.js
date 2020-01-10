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
