import gql from 'graphql-tag'

export const UPDATE_PROFILE_DATA = gql`
  mutation updateProfileData($id: String!, $name: String, $role: String, $about: String, $avatarUrl: String) {
    update_users(
      where: { id: { _eq: $id } }
      _set: { role: $role, about_me: $about, display_name: $name, avatar_url: $avatarUrl }
    ) {
      returning {
        id
      }
    }
  }
`
