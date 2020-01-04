import { InteractionManager } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { DrawerActions } from 'react-navigation-drawer'

const NAVIGATION_NAVIGATE_TYPE = 'Navigation/NAVIGATE'

export default class NavigationService {
  static navigator

  static init(navigationRef) {
    NavigationService.navigator = navigationRef
  }

  static navigate(routeName, params) {
    if (!NavigationService.navigate) {
      return
    }

    InteractionManager.runAfterInteractions(() => {
      NavigationService.navigator.dispatch(
        NavigationActions.navigate({
          routeName,
          params,
          action: {
            routeName,
            type: NAVIGATION_NAVIGATE_TYPE,
          },
        }),
      )
    })
  }

  static goBack() {
    if (!NavigationService.navigator) {
      return
    }

    NavigationService.navigator.dispatch(NavigationActions.back())
  }

  static openDrawer() {
    if (!NavigationService.navigator) {
      return
    }

    NavigationService.navigator.dispatch(DrawerActions.openDrawer())
  }

  static closeDrawer() {
    if (!NavigationService.navigator) {
      return
    }

    console.log('777')

    NavigationService.navigator.dispatch(DrawerActions.closeDrawer())
  }
}
