import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import ParticipantsScreen from '@/screens/Participants'
import ParticipantDetails from '@/components/ParticipantDetails'
import HeaderIcon from '@/components/HeaderIcon'
import { PARTICIPANTS_MAIN_PAGE_PATH, PARTICIPANT_DETAILS_PAGE_PATH } from '@/constants'

const PARTICIPANTS_HEADER_TEXT = 'Participants'

const ParticipantsNavigator = createStackNavigator(
  {
    [PARTICIPANTS_MAIN_PAGE_PATH]: ParticipantsScreen,
    [PARTICIPANT_DETAILS_PAGE_PATH]: ParticipantDetails,
  },
  {
    initialRouteName: PARTICIPANTS_MAIN_PAGE_PATH,
    headerMode: 'none',
  },
)

ParticipantsNavigator.navigationOptions = ({ navigation }) => ({
  title: PARTICIPANTS_HEADER_TEXT,
  headerLeft: <HeaderIcon name="menu" onPress={() => navigation.toggleDrawer()} />,
})

export default ParticipantsNavigator
