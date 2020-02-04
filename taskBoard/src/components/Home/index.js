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
import { theme } from '@/theme'
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
          <ChartPie workingPie={62} color={theme.colors.organicGreen} />
        </StyledContainer>
        <StyledContainer>
          <StyledPageTitle>Performance</StyledPageTitle>
          <ChartPie workingPie={47} color={theme.colors.lightBlue} />
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
