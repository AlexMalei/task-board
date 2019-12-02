import React from 'react'

import { ThemeProvider } from 'styled-components'
import AppNavigator from './routes'

import { theme } from '@/theme'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  )
}

export default App

