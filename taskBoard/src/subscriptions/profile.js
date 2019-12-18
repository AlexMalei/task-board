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
