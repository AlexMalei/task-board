import React from 'react'
import { ThemeProvider } from 'styled-components'

import SignUp from '@/screens/SignUp'
import ScreenContainer from '@/components/ScreenContainer'
import { theme } from '@/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <ScreenContainer> */}
      <SignUp />
      {/* </ScreenContainer> */}
    </ThemeProvider>
  )
}

export default App
