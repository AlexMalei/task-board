import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import IconB from 'react-native-vector-icons/dist/Entypo'
import IconA from 'react-native-vector-icons/dist/FontAwesome5'

import {
  HOME_PAGE_PATH,
  PROFILE_PAGE_PATH,
  LOGIN_PATH,
  APP_PATH,
  REGISTER_PATH,
  NOTIFICATIONS_PAGE_PATH,
  MY_TASKS_PAGE_PATH,
  PROJECT_TAB_NAVIGATOR,
  PARTICIPANTS_MAIN_PAGE_PATH,
} from '@/constants'
import SignInScreen from '@/screens/SignIn'
import SignUpScreen from '@/screens/SignUp'
import MyTasks from '@/components/MyTasks'
import Notifications from '@/components/Notifications'
import CustomDrawerContentComponent from '@/components/CustomDrawerContentComponent'
import Profile from '@/components/Profile'
import Home from '@/components/Home'
import { theme } from '@/theme'

import ProjectTabNavigator from './ProjectTabNavigator'
import ParticipantsNavigator from './ParticipantsNavigator'

const HomeScreens = createStackNavigator(
  {
    [HOME_PAGE_PATH]: Home,
    [PROFILE_PAGE_PATH]: Profile,
    [PROJECT_TAB_NAVIGATOR]: ProjectTabNavigator,
    [PARTICIPANTS_MAIN_PAGE_PATH]: ParticipantsNavigator,
  },
  {
    initialRouteName: HOME_PAGE_PATH,
    navigationOptions: {
      drawerLabel: HOME_PAGE_PATH,
      title: HOME_PAGE_PATH,
      tabBarLabel: HOME_PAGE_PATH,
      inactiveTintColor: theme.colors.gray,
      drawerIcon: () => <Icon style={styles.icon} name="home" size={32} color={theme.colors.white} />,
    },
  },
)

const MyTasksScreens = createStackNavigator(
  {
    [MY_TASKS_PAGE_PATH]: {
      screen: MyTasks,
    },
  },
  {
    initialRouteName: MY_TASKS_PAGE_PATH,
    navigationOptions: {
      drawerLabel: MY_TASKS_PAGE_PATH,
      title: MY_TASKS_PAGE_PATH,
      tabBarLabel: MY_TASKS_PAGE_PATH,
      inactiveTintColor: theme.colors.gray,
      drawerIcon: () => <IconA style={styles.icon} name="tasks" size={32} color={theme.colors.white} />,
    },
  },
)

const NotificationsScreens = createStackNavigator(
  {
    [NOTIFICATIONS_PAGE_PATH]: {
      screen: Notifications,
    },
  },
  {
    initialRouteName: NOTIFICATIONS_PAGE_PATH,
    navigationOptions: {
      drawerLabel: NOTIFICATIONS_PAGE_PATH,
      title: NOTIFICATIONS_PAGE_PATH,
      tabBarLabel: NOTIFICATIONS_PAGE_PATH,
      inactiveTintColor: theme.colors.gray,
      drawerIcon: () => <IconB style={styles.icon} name="message" size={32} color={theme.colors.white} />,
    },
  },
)

export const Navigator = createDrawerNavigator(
  {
    [HOME_PAGE_PATH]: HomeScreens,
    [MY_TASKS_PAGE_PATH]: MyTasksScreens,
    [NOTIFICATIONS_PAGE_PATH]: NotificationsScreens,
  },
  {
    initialRouteName: HOME_PAGE_PATH,
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: theme.colors.white,
      inactiveTintColor: theme.colors.gray,

      style: {
        marginVertical: 10,
        marginHorizontal: 0,
        color: theme.colors.red,
      },
      labelStyle: {
        fontFamily: 'Quicksand',
      },
    },
    drawerWidth: Dimensions.get('window').width - 100,
    drawerBackgroundColor: theme.colors.black,
    edgeWidth: 100,
  },
)

const AuthNavigator = createStackNavigator(
  {
    [LOGIN_PATH]: SignInScreen,
    [REGISTER_PATH]: SignUpScreen,
  },
  {
    headerMode: 'none',
  },
)

const SwitchNavigator = createSwitchNavigator(
  {
    [LOGIN_PATH]: AuthNavigator,
    [APP_PATH]: Navigator,
  },
  {
    initialRouteName: LOGIN_PATH,
  },
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
})

export default createAppContainer(SwitchNavigator)
