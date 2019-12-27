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

import DrawerHeader from '@/components/CustomDrawerContentComponent/DrawerHeader'
import DrawerTitle from '@/components/CustomDrawerContentComponent/DrawerTitle'
import { changeTitleTabNavigator } from '@/routes/ProjectTabNavigator'
import { USER_DATA_SUBSCRIPTION } from '@/subscriptions'
import { getUserIdFromToken } from '@/helpers'
import { TASKS_PAGE_PATH } from '@/constants'
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
import NavigationService from '@/services/Navigation'
import styled from 'styled-components'

const Item = ({ item: { id, name }, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledDrawerProjectContainer>
        <StyledDrawerIcon name="local-play" />
        <StyledDrawerProjectText>{name}</StyledDrawerProjectText>
      </StyledDrawerProjectContainer>
    </TouchableOpacity>
  )
}

const initialState = {
  selectedCategory: '',
}

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
              <StyledDrawerTextGray>MENU</StyledDrawerTextGray>
              <DrawerItems {...props} />
              <StyledTitleProject>PROJECTS</StyledTitleProject>
              <SafeAreaView>
                <FlatList
                  data={projects}
                  ListEmptyComponent={
                    <View>
                      <Text>The list of projects is empty...</Text>
                    </View>
                  }
                  renderItem={({ item: project, index }) => (
                    <Item
                      item={project}
                      index={index}
                      onPress={() => {
                        changeTitleTabNavigator(project)
                        navigation.navigate(TASKS_PAGE_PATH, { projectId: project.id, name: project.name })
                        NavigationService.closeDrawer()
                      }}
                      style={state.selectedCategory === index ? styles.selected : null}
                    />
                  )}
                  keyExtractor={project => project.id}
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

Item.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CustomDrawerContentComponent

const styles = StyleSheet.create({
  selected: {
    color: 'red',
  },
  buttonText: {
    color: 'red',
  },
})
