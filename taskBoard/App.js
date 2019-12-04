import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/theme'

import AppNavigator from './src/routes'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  )
}
