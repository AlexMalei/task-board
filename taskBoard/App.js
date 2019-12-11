import React from 'react'

import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/react-hooks'
import Navigation from '@/routes'

import { theme } from '@/theme'
import { wsClient } from '@/client'
import NavigationService from '@/services/Navigation'

const App = () => {
  return (
    <ApolloProvider client={wsClient}>
      <ThemeProvider theme={theme}>
        <Navigation ref={NavigationService.init} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
