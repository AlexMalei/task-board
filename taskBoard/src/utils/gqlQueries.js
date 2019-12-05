import gql from 'graphql-tag'

export const PROJECTS_QUERY = gql`
  {
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

export const PROFILE_DATA_QUERY = gql`
  query ProfileData($id: String!) {
    users_by_pk(id: $id) {
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
