import React from 'react'

import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/react-hooks'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Navigation from '@/routes'
import { theme } from '@/theme'
import { wsClient } from '@/client'
import NavigationService from '@/services/Navigation'
import { store, persistor } from '@/store'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={wsClient}>
          <ThemeProvider theme={theme}>
            <Navigation ref={NavigationService.init} />
          </ThemeProvider>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
