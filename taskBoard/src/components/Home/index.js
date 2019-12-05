import React from 'react'
import { Text } from 'react-native'

import { HOME_PAGE_PATH } from '@/constants'
import IconMenu from '@/components/IconMenu'

import { StyledHomeContainer } from './component'

const Home = () => {
  return (
    <StyledHomeContainer>
      <Text>Home</Text>
    </StyledHomeContainer>
  )
}

Home.navigationOptions = ({ navigation }) => ({
  title: HOME_PAGE_PATH,
  headerLeft: <IconMenu navigation={navigation} />,
})

export default Home
