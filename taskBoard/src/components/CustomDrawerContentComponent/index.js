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
} from 'react-native'
import { useSubscription, useMutation } from '@apollo/react-hooks'
import { DrawerItems } from 'react-navigation-drawer'
import PropTypes from 'prop-types'

import DrawerHeader from '@/components/CustomDrawerContentComponent/DrawerHeader'
import DrawerTitle from '@/components/CustomDrawerContentComponent/DrawerTitle'
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

const Item = ({ item, onPress }) => {
  const { id, name } = item

  return (
    <TouchableHighlight onPress={onPress}>
      <StyledDrawerProjectContainer>
        <StyledDrawerIcon name="local-play" />
        <StyledDrawerProjectText>{name}</StyledDrawerProjectText>
      </StyledDrawerProjectContainer>
    </TouchableHighlight>
  )
}

const CustomDrawerContentComponent = props => {
  const { data: userId } = useAsync(getUserIdFromToken)

  const { loading: profileLoading, error: profileError, data } = useSubscription(USER_DATA_SUBSCRIPTION, {
    variables: { id: userId || '' },
  })

  const { users_by_pk: { about_me, avatar_url, display_name, role, email, projects } = {} } = data || {}
  const {
    navigation: { navigate },
  } = props

  return (
    <React.Fragment>
      {profileLoading ? (
        <ActivityIndicator size="large" />
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
                  renderItem={({ item: project }) => (
                    <Item item={project} onPress={() => navigate(TASKS_PAGE_PATH, { projectId: project.id })} />
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
