import React from 'react'
import { StyleSheet, Image, View, FlatList, ActivityIndicator, Dimensions, Text } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer'
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
} from '@/constants'
import SignInScreen from '@/screens/SignIn'
import SignUpScreen from '@/screens/SignUp'
import MyTasks from '@/components/MyTasks'
import Notifications from '@/components/Notifications'
import CustomDrawerContentComponent from '@/components/CustomDrawerContentComponent'
import ProjectTabNavigator from './ProjectTabNavigator'
import Profile from '@/components/Profile'

const HomeScreens = createStackNavigator(
  {
    [HOME_PAGE_PATH]: {
      screen: ProjectTabNavigator,
    },
    [PROFILE_PAGE_PATH]: {
      screen: Profile,
    },
  },
  {
    initialRouteName: HOME_PAGE_PATH,
    navigationOptions: {
      drawerLabel: HOME_PAGE_PATH,
      title: HOME_PAGE_PATH,
      tabBarLabel: HOME_PAGE_PATH,
      inactiveTintColor: 'grey',
      drawerIcon: () => <Icon style={styles.icon} name="home" size={32} color="#FFFFFF" />,
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
      inactiveTintColor: 'grey',
      drawerIcon: () => <IconA style={styles.icon} name="tasks" size={32} color="#FFFFFF" />,
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
      inactiveTintColor: 'grey',
      drawerIcon: () => <IconB style={styles.icon} name="message" size={32} color="#FFFFFF" />,
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
      activeTintColor: 'white',
      inactiveTintColor: 'gray',

      style: {
        marginVertical: 10,
        marginHorizontal: 0,
        color: 'red',
      },
      labelStyle: {
        fontFamily: 'Quicksand',
      },
    },
    drawerWidth: Dimensions.get('window').width - 100,
    drawerBackgroundColor: 'black',
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
