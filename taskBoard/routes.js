import React from 'react'
import { StyleSheet, Image, View, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer'

import { HOME_PAGE_PATH, PROFILE_PAGE_PATH, MY_TASKS_PAGE_PATH } from '@/constants'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import MyTasks from '@/components/MyTasks'

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
      // drawerIcon: ({ tintColor }) => (
      //   <Image source={require('@/assets/tiny_logo.png')} style={[styles.icon, { tintColor: tintColor }]} />
      // ),
    },
    gesturesEnabled: true,
    // tabBarLabel: 'Home!',
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
    contentOptions: {
      activeTintColor: 'gray',
      inactiveTintColor: 'white',
      style: {
        marginVertical: 10,
        marginHorizontal: 15,
        color: 'red',
      },
      labelStyle: {
        fontFamily: 'Quicksand',
      },
    },
    drawerWidth: Dimensions.get('window').width - 100,
    drawerBackgroundColor: 'black',
    gesturesEnabled: true,
    swipeEnable: true,
    animationEnabled: true,
  },
)

// const styles = StyleSheet.create({
//   icon: {
//     width: 24,
//     height: 24,
//   },
// })

export default createAppContainer(Navigator)
