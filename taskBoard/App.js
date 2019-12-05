import React from 'react'

import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/react-hooks'
import AppNavigator from '@/routes'

import { theme } from '@/theme'
import { wsGqlClient } from '@/utils'
import SignIn from '@/screens/SignIn'

const App = () => {
  return (
    <ApolloProvider client={wsGqlClient}>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
