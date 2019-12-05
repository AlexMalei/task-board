import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/theme'

import { wsGqlClient } from '@/utils'
import SignIn from '@/screens/SignIn'


import AppNavigator from './src/routes'

export default function App() {
  return (
    <ApolloProvider client={wsGqlClient}>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    </ApolloProvider>
  )
}
