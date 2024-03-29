import React, { useState } from 'react'
import { View, FlatList, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { useSubscription } from '@apollo/react-hooks'
import { connect } from 'react-redux'

import NavigationService from '@/services/Navigation'
import DrawerHeader from '@/components/CustomDrawerContentComponent/DrawerHeader'
import DrawerTitle from '@/components/CustomDrawerContentComponent/DrawerTitle'
import ModalAddProject from '@/forms/ModalAddProject'
import Spinner from '@/components/Spinner'
import { TASKS_MAIN_PAGE_PATH, defaultRoutes } from '@/constants'
import { changeTabNavigatorOptions } from '@/routes/ProjectTabNavigator'
import { USER_DATA_SUBSCRIPTION } from '@/subscriptions'
import { getUserIdFromToken } from '@/helpers'
import { useAsync } from '@/hooks'
import { theme } from '@/theme'
import { fetchSetProjectIdAction } from '@/actions'

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

const Item = ({ item: { name, icon }, onPress, index, selected }) => {
  icon = icon ? icon : 'meetup'
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledDrawerProjectContainer>
        <StyledDrawerIcon name={icon} isActive={selected === index} />
        <StyledDrawerProjectText isActive={selected === index}>{name}</StyledDrawerProjectText>
      </StyledDrawerProjectContainer>
    </TouchableOpacity>
  )
}

const onItem = ({ name, icon, id }, setSelected, setSelectedProject, index, setProjectId) => {
  changeTabNavigatorOptions(name, id)

  if (icon) {
    NavigationService.navigate(name)
    setSelected(index)
    setSelectedProject(false)
  } else {
    //@todo: insert to redux projectId
    setProjectId(id)
    NavigationService.navigate(TASKS_MAIN_PAGE_PATH)
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

const CustomDrawerContentComponent = ({ setProjectId }) => {
  const [selected, setSelected] = useState(0)
  const [selectedProject, setSelectedProject] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const { data: userId } = useAsync(getUserIdFromToken)
  const [selectedCategory, setSelectedCategory] = useState('')

  const { loading: profileLoading, data } = useSubscription(USER_DATA_SUBSCRIPTION, {
    variables: { id: userId || '' },
  })

  const { projects, display_name, avatar_url, role } = data?.users_by_pk || {}

  return (
    <React.Fragment>
      {profileLoading ? (
        <Spinner />
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
                  data={defaultRoutes}
                  ListHeaderComponent={FlatListHeader('MENU')}
                  keyExtractor={handleKeyExtractor}
                  renderItem={({ item: project, index }) => (
                    <Item
                      item={project}
                      index={index}
                      selected={selected}
                      onPress={() => onItem(project, setSelected, setSelectedProject, index)}
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
                      onPress={() => onItem(project, setSelected, setSelectedProject, index, setProjectId)}
                      style={selectedCategory === index ? styles.selected : null}
                    />
                  )}
                />

                <StyledTitleAddProject onPress={() => onAddProject(setIsVisible)}>
                  + Add a Project
                </StyledTitleAddProject>
              </SafeAreaView>
            </StyledDrawerContentMargin>
          </ScrollView>
          <ModalAddProject isModalVisible={isVisible} setIsVisible={setIsVisible} id={userId} />
        </StyledDrawerContainer>
      )}
    </React.Fragment>
  )
}

console.disableYellowBox = true //@todo: disable warning componentWillReceiveProps

const styles = StyleSheet.create({
  selected: {
    color: theme.colors.red,
  },
  buttonText: {
    color: theme.colors.red,
  },
})

const mapDispatchToProps = dispatch => ({
  setProjectId: projectId => dispatch(fetchSetProjectIdAction(projectId)),
})

export default connect(null, mapDispatchToProps)(CustomDrawerContentComponent)
