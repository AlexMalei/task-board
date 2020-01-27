import React from 'react'
import { ScrollView } from 'react-native'

import { HOME_PAGE_PATH } from '@/constants'
import HeaderIcon from '@/components/HeaderIcon'
import {
  StyledBackgroundContainer,
  StyledContainer,
  StyledPageTitle,
  StyledTaskCount,
} from '@/components/Home/component'
import { ChartPie } from './ChartPie'
import { ChartLine } from './ChartLine'

const Home = () => {
  return (
    <ScrollView>
      <StyledBackgroundContainer>
        <StyledContainer>
          <StyledPageTitle>Completed task</StyledPageTitle>
          <StyledTaskCount>372</StyledTaskCount>
          <ChartLine />
        </StyledContainer>
        <StyledContainer>
          <StyledPageTitle>Working Rate</StyledPageTitle>
          <ChartPie workingPai={62} color="#7EB973" />
        </StyledContainer>
        <StyledContainer>
          <StyledPageTitle>Performance</StyledPageTitle>
          <ChartPie workingPai={47} color="#764CED" />
        </StyledContainer>
        <StyledContainer>
          <StyledPageTitle>Today Task</StyledPageTitle>
        </StyledContainer>
        <StyledContainer>
          <StyledPageTitle>Activity</StyledPageTitle>
        </StyledContainer>
      </StyledBackgroundContainer>
    </ScrollView>
  )
}

Home.navigationOptions = ({ navigation }) => ({
  title: HOME_PAGE_PATH,
  headerLeft: <HeaderIcon name="menu" onPress={() => navigation.toggleDrawer()} />,
})

export default Home
