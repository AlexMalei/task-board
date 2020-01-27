import { createStackNavigator } from 'react-navigation-stack'

import TasksScreen from '@/screens/Tasks'
import TaskDetails from '@/components/TaskDetails'
import { TASKS_MAIN_PAGE_PATH, TASKS_DETAILS_PAGE_PATH } from '@/constants'

const TasksNavigator = createStackNavigator(
  {
    [TASKS_MAIN_PAGE_PATH]: TasksScreen,
    [TASKS_DETAILS_PAGE_PATH]: TaskDetails,
  },
  {
    initialRouteName: TASKS_MAIN_PAGE_PATH,
    headerMode: 'none',
  },
)

export default TasksNavigator
