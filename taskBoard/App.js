import React from 'react'
import { ThemeProvider } from 'styled-components'
import firebase from 'react-native-firebase'

import ScreenContainer from '@/components/ScreenContainer'
import { theme } from '@/theme'
import SignUp from '@/screens/SignUp'
import SignIn from '@/forms/SignIn'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <SignUp /> */}
      <SignIn />
    </ThemeProvider>
  )
}

export default App
