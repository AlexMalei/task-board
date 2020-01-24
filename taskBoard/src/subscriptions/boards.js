import gql from 'graphql-tag'

export const PROJECT_BOARDS_SUBSCRIPTION = gql`
  subscription projectBoards($id: uuid!) {
    projects_by_pk(id: $id) {
      boards {
        id
        name
        order
        tasks(order_by: { order: asc }) {
          id
          name
          order
          content
          user {
            avatar_url
            display_name
          }
          type {
            name
            color
            background_color
          }
        }
      }
    }
  }
`
