import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'
import { useSubscription, useMutation } from '@apollo/react-hooks'
import { DrawerItems } from 'react-navigation-drawer'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DrawerHeader from '@/components/CustomDrawerContentComponent/DrawerHeader'
import DrawerTitle from '@/components/CustomDrawerContentComponent/DrawerTitle'
import { changeTitleTabNavigator } from '@/routes/ProjectTabNavigator'
import { USER_DATA_SUBSCRIPTION } from '@/subscriptions'
import NavigationService from '@/services/Navigation'
import { getUserIdFromToken } from '@/helpers'
import { TASKS_PAGE_PATH, MY_TASKS_PAGE_PATH, HOME_PAGE_PATH, NOTIFICATIONS_PAGE_PATH, defaultRoute } from '@/constants'
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
} from './component'

const Item = ({ item: { id, name }, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledDrawerProjectContainer>
        <StyledDrawerIcon name="pied-piper-alt" />
        <StyledDrawerProjectText>{name}</StyledDrawerProjectText>
      </StyledDrawerProjectContainer>
    </TouchableOpacity>
  )
}
//meetup
//leaf
//coins
//cube

const initialState = {
  selectedCategory: '',
}

const FlatListHeaderMenu = () => {
  return <StyledTitleProject>MENU</StyledTitleProject>
}

const FlatListHeaderProjects = () => {
  return <StyledTitleProject>PROJECTS</StyledTitleProject>
}

const handleKeyExtractor = ({ id }) => id

const CustomDrawerContentComponent = props => {
  const { data: userId } = useAsync(getUserIdFromToken)

  const [state, setState] = useState(initialState)

  const { loading: profileLoading, error: profileError, data } = useSubscription(USER_DATA_SUBSCRIPTION, {
    variables: { id: userId || '' },
  })

  const { projects, display_name, avatar_url, role } = data?.users_by_pk || {}
  const { navigation } = props

  return (
    <React.Fragment>
      {profileLoading ? (
        <ActivityIndicator size="large" style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} />
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
              {/* <StyledDrawerTextGray>MENU</StyledDrawerTextGray> */}
              {/* <DrawerItems {...props} /> */}

              {/* <TouchableOpacity onPress={() => onPageRoute(HOME_PAGE_PATH)}>
                <StyledDrawerProjectContainer>
                  <StyledDrawerIcon name="home" />
                  <Text style={styles.navItemStyle}>Home</Text>
                </StyledDrawerProjectContainer>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => onPageRoute(MY_TASKS_PAGE_PATH)}>
                <StyledDrawerProjectContainer>
                  <StyledDrawerIcon name="tasks" />
                  <Text style={styles.navItemStyle}>My Tasks</Text>
                </StyledDrawerProjectContainer>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => onPageRoute(NOTIFICATIONS_PAGE_PATH)}>
                <StyledDrawerProjectContainer>
                  <StyledDrawerIcon name="comments-dollar" />
                  <Text style={styles.nav}>Notifications</Text>
                </StyledDrawerProjectContainer>
              </TouchableOpacity> */}

              <SafeAreaView>
                <FlatList
                  data={defaultRoute}
                  ListHeaderComponent={FlatListHeaderMenu}
                  keyExtractor={handleKeyExtractor}
                  renderItem={({ item: project, index }) => (
                    <Item
                      item={project}
                      index={index}
                      onPress={() => {
                        changeTitleTabNavigator(project)
                        navigation.navigate(TASKS_PAGE_PATH, { projectId: project.id, name: project.name })
                        NavigationService.closeDrawer()
                      }}
                    />
                  )}
                />

                <FlatList
                  data={projects}
                  ListHeaderComponent={FlatListHeaderProjects}
                  keyExtractor={handleKeyExtractor}
                  renderItem={({ item: project, index }) => (
                    <Item
                      item={project}
                      index={index}
                      onPress={() => {
                        changeTitleTabNavigator(project)
                        navigation.navigate(TASKS_PAGE_PATH, { projectId: project.id, name: project.name })
                        NavigationService.closeDrawer()
                      }}
                    />
                  )}
                />
                <StyledTitleAddProject>+ Add a Project</StyledTitleAddProject>
              </SafeAreaView>
            </StyledDrawerContentMargin>
          </ScrollView>
        </StyledDrawerContainer>
      )}
    </React.Fragment>
  )
}

console.disableYellowBox = true //@todo: disable warning componentWillReceiveProps

// Item.propTypes = {
//   title: PropTypes.string.isRequired,
// }

export default CustomDrawerContentComponent

const styles = StyleSheet.create({
  selected: {
    color: 'white',
  },
  buttonText: {
    color: 'red',
  },
  navItemStyle: {
    color: 'red',
    paddingLeft: 30,
    color: 'gray',
    fontSize: 14,
  },
  nav: {
    color: 'white',
    paddingLeft: 30,
    fontSize: 14,
  },
})
