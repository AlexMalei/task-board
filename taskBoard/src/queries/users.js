import gql from 'graphql-tag'

export const GET_USER_DATA = gql`
  query getUserData($userId: String!) {
    users(where: { id: { _eq: $userId } }) {
      avatar_url
      id
      display_name
    }
  }
`
