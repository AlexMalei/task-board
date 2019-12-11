import React from 'react'
import { StyleSheet, Image, View, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import IconA from 'react-native-vector-icons/dist/FontAwesome5'
import IconD from 'react-native-vector-icons/dist/AntDesign'

import {
  HOME_PAGE_PATH,
  PROFILE_PAGE_PATH,
  MY_TASKS_PAGE_PATH,
  LOGIN_PATH,
  APP_PATH,
  REGISTER_PATH,
  LOGOUT_PATH,
} from '@/constants'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import MyTasks from '@/components/MyTasks'
import CustomDrawerContentComponent from '@/components/CustomDrawerContentComponent'

import Login from '@/forms/SignIn'
import Register from '@/forms/SignUp'

const HomeScreens = createStackNavigator(
  {
    [HOME_PAGE_PATH]: {
      screen: Home,
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

const ProfileScreens = createStackNavigator(
  {
    [PROFILE_PAGE_PATH]: {
      screen: Profile,
    },
  },
  {
    initialRouteName: PROFILE_PAGE_PATH,
    navigationOptions: {
      drawerLabel: PROFILE_PAGE_PATH,
      title: PROFILE_PAGE_PATH,
      tabBarLabel: PROFILE_PAGE_PATH,
      inactiveTintColor: 'grey',
      drawerIcon: () => <Icon style={styles.icon} name="user" size={32} color="#FFFFFF" />,
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

export const Navigator = createDrawerNavigator(
  {
    [HOME_PAGE_PATH]: HomeScreens,
    [PROFILE_PAGE_PATH]: ProfileScreens,
    [MY_TASKS_PAGE_PATH]: MyTasksScreens,
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
    [LOGIN_PATH]: { screen: Login },
    [REGISTER_PATH]: { screen: Register },
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
