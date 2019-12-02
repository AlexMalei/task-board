import React from 'react'
import { StyleSheet, Image, View, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import IconM from 'react-native-vector-icons/dist/MaterialIcons'
import IconA from 'react-native-vector-icons/dist/FontAwesome5'

import { HOME_PAGE_PATH, PROFILE_PAGE_PATH, MY_TASKS_PAGE_PATH, WEBSITE_REDESIGN_PATH } from '@/constants'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import MyTasks from '@/components/MyTasks'
import WebsiteRedesign from '@/components/WebsiteRedesign'
import CustomDrawerContentComponent from '@/components/CustomDrawerContentComponent'

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
      drawerIcon: () => <Icon style={styles.icon} name="home"
size={32} color="#FFFFFF" />,
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
      drawerIcon: () => <Icon style={styles.icon} name="user"
size={32} color="#FFFFFF" />,
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
      drawerIcon: () => <IconA style={styles.icon} name="tasks"
size={32} color="#FFFFFF" />,
    },
  },
)

const WebsiteRedesignScreens = createStackNavigator(
  {
    [WEBSITE_REDESIGN_PATH]: {
      screen: WebsiteRedesign,
    },
  },
  {
    initialRouteName: WEBSITE_REDESIGN_PATH,
    navigationOptions: {
      drawerLabel: WEBSITE_REDESIGN_PATH,
      title: WEBSITE_REDESIGN_PATH,
      tabBarLabel: WEBSITE_REDESIGN_PATH,
      inactiveTintColor: 'grey',
      drawerIcon: () => <IconM style={styles.icon} name="local-play"
size={32} color="#FFFFFF" />,
    },
  },
)

export const Navigator = createDrawerNavigator(
  {
    [HOME_PAGE_PATH]: HomeScreens,
    [PROFILE_PAGE_PATH]: ProfileScreens,
    [MY_TASKS_PAGE_PATH]: MyTasksScreens,
    [WEBSITE_REDESIGN_PATH]: WebsiteRedesignScreens,
  },
  {
    initialRouteName: HOME_PAGE_PATH,
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
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

    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
})

export default createAppContainer(Navigator)
