import React, { useState } from 'react'
import { View, FlatList, SafeAreaView, ScrollView, TouchableOpacity, Text, Button } from 'react-native'

import { useSubscription, useMutation } from '@apollo/react-hooks'
import { changeTitleTabNavigator } from '@/routes/ProjectTabNavigator'
import { USER_DATA_SUBSCRIPTION } from '@/subscriptions'
import NavigationService from '@/services/Navigation'
import DrawerHeader from '@/components/CustomDrawerContentComponent/DrawerHeader'
import DrawerTitle from '@/components/CustomDrawerContentComponent/DrawerTitle'
import { TASKS_PAGE_PATH, defaultRoute, ADD_PROJECT_PATH } from '@/constants'
import ModalAddProject from '@/forms/ModalAddProject'
import { getUserIdFromToken } from '@/helpers'
import { useAsync } from '@/hooks'

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
  StyleActivityIndicator,
} from './component'

const Item = ({ item: { name, icon }, onPress, index, selected }) => {
  icon = icon ? icon : 'pied-piper-alt'
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledDrawerProjectContainer>
        <StyledDrawerIcon name={icon} isActive={selected === index} />
        <StyledDrawerProjectText isActive={selected === index}>{name}</StyledDrawerProjectText>
      </StyledDrawerProjectContainer>
    </TouchableOpacity>
  )
}

const onItem = ({ name, icon }, navigate, setSelected, setSelectedProject, index) => {
  changeTitleTabNavigator(name)
  if (icon) {
    navigate(name)
    setSelected(index)
    setSelectedProject(false)
  } else {
    navigate(TASKS_PAGE_PATH)
    setSelectedProject(index)
    setSelected(false)
  }
  NavigationService.closeDrawer()
}

const FlatListHeader = name => {
  return <StyledTitleProject>{name}</StyledTitleProject>
}

const handleKeyExtractor = ({ id }) => id

const onAddProject = setIsVisible => {
  setIsVisible(true)
}

const CustomDrawerContentComponent = props => {
  const [selected, setSelected] = useState(0)
  const [selectedProject, setSelectedProject] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const { data: userId } = useAsync(getUserIdFromToken)

  const { loading: profileLoading, error: profileError, data } = useSubscription(USER_DATA_SUBSCRIPTION, {
    variables: { id: userId || '' },
  })

  const { projects, display_name, avatar_url, role } = data?.users_by_pk || {}
  const {
    navigation: { navigate },
  } = props

  return (
    <React.Fragment>
      {profileLoading ? (
        <StyleActivityIndicator size={'large'} />
      ) : (
        <StyledDrawerContainer>
          <ScrollView>
            <DrawerTitle />
            <DrawerHeader name={display_name} avatar={avatar_url} role={role} />
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
              <SafeAreaView>
                <FlatList
                  data={defaultRoute}
                  ListHeaderComponent={FlatListHeader('MENU')}
                  keyExtractor={handleKeyExtractor}
                  renderItem={({ item: project, index }) => (
                    <Item
                      item={project}
                      index={index}
                      selected={selected}
                      onPress={() => onItem(project, navigate, setSelected, setSelectedProject, index)}
                    />
                  )}
                />

                <FlatList
                  data={projects}
                  ListHeaderComponent={FlatListHeader('PROJECTS')}
                  keyExtractor={handleKeyExtractor}
                  renderItem={({ item: project, index }) => (
                    <Item
                      item={project}
                      index={index}
                      selected={selectedProject}
                      onPress={() => onItem(project, navigate, setSelected, setSelectedProject, index)}
                    />
                  )}
                />

                <StyledTitleAddProject onPress={() => onAddProject(setIsVisible)}>
                  + Add a Project
                </StyledTitleAddProject>
              </SafeAreaView>
            </StyledDrawerContentMargin>
          </ScrollView>
          <ModalAddProject isModalVisible={isVisible} setIsVisible={setIsVisible} />
        </StyledDrawerContainer>
      )}
    </React.Fragment>
  )
}

console.disableYellowBox = true //@todo: disable warning componentWillReceiveProps

export default CustomDrawerContentComponent
