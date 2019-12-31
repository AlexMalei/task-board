import gql from 'graphql-tag'

export const CALENDAR_TASKS_SUBSCRIPTIONS = gql`
  subscription profileData($projectId: uuid!) {
    projects_by_pk(id: $projectId) {
      boards {
        id
        tasks(where: { archived: { _eq: false } }) {
          id
          deadline
          name
          order
          content
          type {
            color
            background_color
            name
          }
          user {
            avatar_url
            display_name
          }
        }
      }
    }
  }
`
// if we need tasks where deadline after current date
// tasks(where: { deadline: { _gt: "2019-12-30" } }) {
//, $currentDate: String!
