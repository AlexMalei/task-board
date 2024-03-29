import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

import NavigationService from '@/services/Navigation'

import BoardsScreen from '@/screens/Boards'
import ActivityScreen from '@/screens/Activity'
import CalendarNavigator from '@/routes/CalendarNavigator'
import TasksNavigator from '@/routes/TasksNavigator'
import { TASKS_PAGE_PATH, BOARDS_PAGE_PATH, ACTIVITY_PAGE_PATH, CALENDAR_PAGE_PATH } from '@/constants'

import { theme } from '@/theme'
import HeaderIcon from '@/components/HeaderIcon'

const ProjectTabNavigator = createMaterialTopTabNavigator(
  {
    [TASKS_PAGE_PATH]: {
      screen: TasksNavigator,

      navigationOptions: {
        title: 'Tasks',
      },
    },

    [BOARDS_PAGE_PATH]: {
      screen: BoardsScreen,

      navigationOptions: {
        title: 'Boards',
      },
    },

    [ACTIVITY_PAGE_PATH]: {
      screen: ActivityScreen,

      navigationOptions: {
        title: 'Activity',
      },
    },

    [CALENDAR_PAGE_PATH]: {
      screen: CalendarNavigator,
      navigationOptions: {
        title: 'Calendar',
      },
    },
  },
  {
    initialRouteName: TASKS_PAGE_PATH,
    lazy: true,
    //lazyPlaceholderComponent
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: theme.colors.codGray,
      inactiveTintColor: theme.colors.gray,
      indicatorStyle: {
        backgroundColor: theme.colors.gold,
      },
      style: {
        backgroundColor: theme.colors.white,
      },
      labelStyle: {
        fontSize: theme.fontSizes[0],
        fontWeight: `${theme.fontWeights.bold}`,
      },
    },
    navigationOptions: {
      drawerLabel: 'ProjectNavigator',
      title: '',
      tabBarLabel: 'ProjectNavigator',
      inactiveTintColor: theme.colors.gray,
      headerLeft: () => <HeaderIcon name="menu" onPress={() => NavigationService.openDrawer()} />,
    },
  },
)

export const changeTabNavigatorOptions = name => {
  ProjectTabNavigator.navigationOptions = () => {
    return {
      headerLeft: () => <HeaderIcon name="menu" onPress={() => NavigationService.openDrawer()} />,
      title: name,
    }
  }
}

export default ProjectTabNavigator
