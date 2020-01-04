import gql from 'graphql-tag'

export const PROJECTS_SUBSCRIPTION = gql`
  subscription projects {
    projects {
      id
      name
      members {
        id
      }
      background_color
      boards {
        tasks {
          id
        }
      }
    }
  }
`

export const ADD_PROJECT_QUERY = gql`
  query User($id: String!) {
    user(id: $id) {
      id
      about_me
      avatar_url
      created_at
      display_name
      email
      role
    }
  }
`
