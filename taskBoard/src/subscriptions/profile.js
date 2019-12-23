import gql from 'graphql-tag'

export const PROFILE_DATA_SUBSCRIPTION = gql`
  subscription profileData($id: String!) {
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
export const USER_DATA_SUBSCRIPTION = gql`
  subscription profileData($id: String!) {
    users_by_pk(id: $id) {
      id
      role
      about_me
      avatar_url
      display_name
      email
      projects {
        id
        name
      }
    }
  }
`
