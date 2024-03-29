const API_GRAPHQL_ENDPOINT = 'http://localhost:3000/v1/graphql'
const API_GRAPHQL_WSS_ENDPOINT = 'ws://localhost:3000/v1/graphql'

const ENV = {
  dev: {
    api: {
      graphql: API_GRAPHQL_ENDPOINT,
      graphqlWSS: API_GRAPHQL_WSS_ENDPOINT,
    },
  },
  staging: {},
  prod: {},
}

const getEnvVars = env => {
  if (__DEV__) {
    return ENV.dev
  }

  if (env === 'staging') {
    return ENV.staging
  }

  return ENV.prod
}

export default getEnvVars
