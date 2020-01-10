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
