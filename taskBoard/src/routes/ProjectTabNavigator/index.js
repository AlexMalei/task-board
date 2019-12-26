import React from 'react'
import { withNavigation } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import NavigationService from '@/services/Navigation'

import { HOME_PAGE_PATH, TASKS_PAGE_PATH, BOARDS_PAGE_PATH, ACTIVITY_PAGE_PATH, CALENDAR_PAGE_PATH } from '@/constants'
import TasksScreen from '@/screens/Tasks'
import BoardsScreen from '@/screens/Boards'
import ActivityScreen from '@/screens/Activity'
import CalendarScreen from '@/screens/Calendar'

import { theme } from '@/theme'
import HeaderIcon from '@/components/HeaderIcon'

// const Menu = props => {
//   return <HeaderIcon name="menu" onPress={() => props.navigation.openDrawer()} />
// }
// const MenuComponent = withNavigation(Menu)

const ProjectTabNavigator = createMaterialTopTabNavigator(
  {
    [TASKS_PAGE_PATH]: {
      screen: TasksScreen,

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
      screen: CalendarScreen,

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
        fontWeight: 'bold',
      },
    },
    navigationOptions: {
      drawerLabel: 'ProjectNavigator',
      title: '',
      tabBarLabel: 'ProjectNavigator',
      inactiveTintColor: 'grey',
      headerLeft: () => <HeaderIcon name="menu" onPress={() => NavigationService.openDrawer()} />,
    },
  },
)

export const changeTitleTabNavigator = ({ name }) => {
  ProjectTabNavigator.navigationOptions = () => {
    return {
      headerLeft: () => <HeaderIcon name="menu" onPress={() => NavigationService.openDrawer()} />,
      title: name,
    }
  }
}

export default ProjectTabNavigator
