const API_GRAPHQL_ENDPOINT = ''
const API_GRAPHQL_WSS_ENDPOINT = ''

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

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  if (__DEV__) {
    return ENV.dev
  }

  if (env === 'staging') {
    return ENV.staging
  }

  return ENV.prod
}

export default getEnvVars
