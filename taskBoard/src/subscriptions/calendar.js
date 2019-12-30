import gql from 'graphql-tag'

export const CALENDAR_TASKS_SUBSCRIPTIONS = gql`
  subscription profileData($projectId: uuid!) {
    projects_by_pk(id: "f2bcc7b4-d1c6-472d-bf87-6e57e19033eb") {
      boards {
        id
        name
        order
        tasks(where: { archived: { _eq: false } }) {
          deadline
          name
        }
      }
    }
  }
`
// if we need tasks where deadline after current date
// tasks(where: { deadline: { _gt: "2019-12-30" } }) {
//, $currentDate: String!
