import React from 'react'
import { View, FlatList, SafeAreaView, ScrollView } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import PropTypes from 'prop-types'

import {
  StyledDrawerProjectContainer,
  StyledDrawerIcon,
  StyledDrawerContainer,
  StyledDataTasks,
  StyledDataTasksText,
  StyledDrawerTextGray,
  StyledDrawerContentMargin,
  StyledTitleProject,
  StyledTitleAddProject,
  StyledDrawerProjectText,
} from './component'

import DrawerHeader from '@/components/CustomDrawerContentComponent/DrawerHeader'
import DrawerTitle from '@/components/CustomDrawerContentComponent/DrawerTitle'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Project',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Project',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Project',
  },
  {
    id: '5862294a0f-3da1-471f-bd96-145571e29d72',
    title: '4 Project',
  },
  {
    id: '5864294a0f-3da1-471f-bd96-145571e29d72',
    title: '5 Project',
  },
  {
    id: '554294a0f-3da1-471f-bd96-145571e29d72',
    title: '6 Project',
  },
  {
    id: '5899294a0f-3da1-471f-bd96-145571e29d72',
    title: '7 Project',
  },
]

// console.disableYellowBox = true //@todo: disable warning componentWillReceiveProps

function Item({ title }) {
  return (
    <StyledDrawerProjectContainer>
      <StyledDrawerIcon name="local-play" />
      <StyledDrawerProjectText>{title}</StyledDrawerProjectText>
    </StyledDrawerProjectContainer>
  )
}

const CustomDrawerContentComponent = props => (
  <StyledDrawerContainer>
    <ScrollView>
      <DrawerTitle />
      <DrawerHeader />

      <StyledDataTasks>
        <View>
          <StyledDataTasksText>129</StyledDataTasksText>
          <StyledDrawerTextGray>Completed Tasks</StyledDrawerTextGray>
        </View>
        <View>
          <StyledDataTasksText>24</StyledDataTasksText>
          <StyledDrawerTextGray>Open Tasks</StyledDrawerTextGray>
        </View>
      </StyledDataTasks>

      <StyledDrawerContentMargin>
        <StyledDrawerTextGray>MENU</StyledDrawerTextGray>
        <DrawerItems {...props} />
        <StyledTitleProject>PROJECTS</StyledTitleProject>
        <SafeAreaView>
          <FlatList data={DATA} renderItem={({ item }) => <Item title={item.title} />} keyExtractor={item => item.id} />
          <StyledTitleAddProject>+ Add a Project</StyledTitleAddProject>
        </SafeAreaView>
      </StyledDrawerContentMargin>
    </ScrollView>
  </StyledDrawerContainer>
)

Item.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CustomDrawerContentComponent
