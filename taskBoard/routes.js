import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import { HOME_PAGE_PATH, PROFILE_PAGE_PATH } from '@/constants'
import Home from '@/components/Home'
import Profile from '@/components/Profile'

const HomeScreens = createStackNavigator(
  {
    [HOME_PAGE_PATH]: {
      screen: Home,
    },
  },
  {
    initialRouteName: HOME_PAGE_PATH,
    navigationOptions: {
      drawerLabel: 'Notifications',
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
      drawerLabel: 'Notifications',
      // drawerIcon: getDrawerItemIcon('list'),
    },
  },
)

export const Navigator = createDrawerNavigator(
  {
    [HOME_PAGE_PATH]: HomeScreens,
    [PROFILE_PAGE_PATH]: ProfileScreens,
  },
  {
    initialRouteName: HOME_PAGE_PATH,
    activeTintColor: 'midnightblue',
    inactiveTintColor: 'grey',
    swipeEnable: true,
    animationEnabled: true,
    renderIndicator: () => null,
    style: {
      backgroundColor: '#f2f',
    },
  },
)

export default createAppContainer(Navigator)
