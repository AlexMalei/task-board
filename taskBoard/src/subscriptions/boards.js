import gql from 'graphql-tag'

export const PROJECT_BOARDS_SUBSCRIPTION = gql`
  subscription projectBoards($id: uuid!) {
    projects_by_pk(id: $id) {
      boards {
        id
        name
        order
        tasks {
          name
          order
          content
          user_id
        }
      }
    }
  }
`
