import React from 'react'

import { HOME_PAGE_PATH } from '@/constants'
import IconMenu from '@/components/IconMenu'
import Projects from '@/components/Projects'

const Home = () => {
  return <Projects />
}

Home.navigationOptions = ({ navigation }) => ({
  title: HOME_PAGE_PATH,
  headerLeft: <IconMenu navigation={navigation} />,
})

export default Home
