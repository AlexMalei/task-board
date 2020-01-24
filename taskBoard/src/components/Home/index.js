import React from 'react'
import { ScrollView } from 'react-native'
import { VictoryLine } from 'victory-native'

import { HOME_PAGE_PATH } from '@/constants'
import HeaderIcon from '@/components/HeaderIcon'
import {
  StyledBackgroundContainer,
  StyledContainer,
  StyledPageTitle,
  StyledTaskCount,
} from '@/components/Home/component'
import { LoaderPie } from './ChatysPie'

const Home = () => {
  return (
    <ScrollView>
      <StyledBackgroundContainer>
        <StyledContainer>
          <StyledPageTitle>Completed task</StyledPageTitle>
          <StyledTaskCount>372</StyledTaskCount>
          <VictoryLine
            width={350}
            interpolation="bundle"
            data={[2, 3, 3, 3, 7, 7.5, 7, 5, 4, 2, 5, 3, 2, 1]}
            style={{ data: { stroke: '#7EB973', strokeWidth: 10 } }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
          />
        </StyledContainer>
        <StyledContainer>
          <StyledPageTitle>Working Rate</StyledPageTitle>
          <LoaderPie workingPai={62} color="#7EB973" />
        </StyledContainer>
        <StyledContainer>
          <StyledPageTitle>Performance</StyledPageTitle>
          <LoaderPie workingPai={42} color="#764CED" />
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
