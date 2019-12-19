import React from 'react'

import { HOME_PAGE_PATH } from '@/constants'
import HeaderIcon from '@/components/HeaderIcon'
import Projects from '@/components/Projects'

const Home = () => {
  return <Projects />
}

Home.navigationOptions = ({ navigation }) => ({
  title: HOME_PAGE_PATH,
  headerLeft: <HeaderIcon name="menu" onPress={() => navigation.toggleDrawer()} />,
})

export default Home
