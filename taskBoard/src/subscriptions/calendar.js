import gql from 'graphql-tag'

export const CALENDAR_TASKS_COUNT_SUBSCRIPTIONS = gql`
  subscription tasksCountData($projectId: uuid!) {
    projects_by_pk(id: $projectId) {
      boards {
        tasks(where: { archived: { _eq: false } }) {
          id
          deadline
        }
      }
    }
  }
`

export const CALENDAR_TASKS_DETAILS_SUBSCRIPTION = gql`
  subscription tasksDetailsData($projectId: uuid!, $deadline: date!) {
    projects_by_pk(id: $projectId) {
      boards {
        tasks(where: { archived: { _eq: false }, deadline: { _eq: $deadline } }, order_by: { order: asc }) {
          id
          deadline
          name
          order
          content
          published
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
