import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { useSubscription } from '@apollo/react-hooks'

import FormButton from '@/fields/FormButton'
import Form from '@/forms/Form'
import Menu from '@/fields/Menu'
import Spinner from '@/components/Spinner'
import { GET_USERS_FOR_ADDING_PARTICIPANTS } from '@/subscriptions'

import {
  StyledHeaderContainer,
  StyledHeaderText,
  MenuButton,
  MenuButtonText,
  IconContainer,
  StyledIcon,
} from './component'
import Participants from './Participants'

const AddParticipantForm = ({ projectId, taskId, onSubmitPress, onCancelPress }) => {
  const [possibleParticipants, setPossibleParticipants] = useState([])
  const [selectedUsers, setSelectedUsers] = useState([])

  const { loading } = useSubscription(GET_USERS_FOR_ADDING_PARTICIPANTS, {
    variables: { projectId, taskId },
    fetchPolicy: 'network-only',
    onSubscriptionData: ({
      subscriptionData: {
        data: {
          projects_by_pk: {
            boards: [
              {
                tasks: [{ participants }],
              },
            ],
            members,
          },
        },
      },
    }) => {
      const taskParticipants = participants.map(participant => participant.user)
      const possibleParticipants = members
        .map(member => member.user)
        .filter(user => !taskParticipants.find(participant => participant.id === user.id))

      setPossibleParticipants(possibleParticipants)
    },
  })

  const handleUserSelection = user => {
    setSelectedUsers(selectedUsers => [...selectedUsers, user])

    setPossibleParticipants(possibleParticipants =>
      possibleParticipants.filter(participant => participant.id === user.id),
    )
  }

  const handleDeleteSelectedUser = () => {}

  return loading ? (
    <Spinner />
  ) : (
    <Form>
      <StyledHeaderContainer>
        <StyledHeaderText>Add participants</StyledHeaderText>
      </StyledHeaderContainer>

      <Menu
        items={possibleParticipants}
        menuStyle={styles.menu}
        menuButtonContainer={styles.menuButtonContainer}
        visibleFieldName="display_name"
        title="Possible participants"
        handleItemPress={user => handleUserSelection(user)}
      >
        <MenuButton>
          <MenuButtonText>Count: {possibleParticipants.length}</MenuButtonText>
          <IconContainer activeOpacity={0.8}>
            <StyledIcon name="arrow-down" />
          </IconContainer>
        </MenuButton>
      </Menu>

      <Participants participants={selectedUsers} onDeleteParticipant={handleDeleteSelectedUser} />

      <FormButton
        onClick={() => {
          onSubmitPress()
        }}
      >
        Add users
      </FormButton>
      <FormButton useBackground={false} onClick={onCancelPress}>
        Cancel
      </FormButton>
    </Form>
  )
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 20,
  },
  menu: {
    width: '80%',
  },
  menuButtonContainer: {
    width: '100%',
    paddingVertical: 20,
  },
})

AddParticipantForm.defaultProps = {
  onUpdatePress: () => {},
  onCancelPress: () => {},
}

export default AddParticipantForm
