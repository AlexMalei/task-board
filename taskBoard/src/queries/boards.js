import gql from 'graphql-tag'

export const GET_PROJECT_DATA_FOR_TASKS = gql`
  query GetProjectDataForTasks($projectId: uuid!) {
    projects_by_pk(id: $projectId) {
      boards {
        id
        name
      }
      types {
        id
        name
      }
    }
  }
`
