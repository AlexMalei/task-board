import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Text } from 'react-native'
import { useSubscription, useMutation } from '@apollo/react-hooks'

import ProfileView from '@/components/ProfileView'
import HeaderIcon from '@/components/HeaderIcon'
import ProfileForm from '@/forms/Profile'
import { PROFILE_DATA_SUBSCRIPTION } from '@/subscriptions'
import { UPDATE_PROFILE_DATA } from '@/mutations'
import { useAsync } from '@/hooks'
import { PROFILE_PAGE_PATH } from '@/constants'
import { getUserIdFromToken } from '@/helpers'

const Profile = props => {
  const [editMode, setEditMode] = useState(false)
  const { data: userId } = useAsync(getUserIdFromToken)
  const { loading: profileLoading, error: profileError, data } = useSubscription(PROFILE_DATA_SUBSCRIPTION, {
    variables: { id: userId || '' },
  })

  const [updateProfile] = useMutation(UPDATE_PROFILE_DATA)

  const handleUpdateProfile = (name, role, about) => {
    updateProfile({ variables: { id: userId, role, name, about } })
  }

  const { users_by_pk: { about_me, avatar_url, display_name, role, email } = {} } = data || {}

  const onStart = () => {
    if (props.navigation?.state?.params?.editMode) {
      // finish editing
      setEditMode(true)
    }
  }

  const onClose = () => {
    setEditMode(false)
  }

  return (
    <React.Fragment>
      {profileLoading ? (
        <ActivityIndicator size="large" />
      ) : editMode ? (
        <ProfileForm
          about={about_me}
          avatarUrl={avatar_url}
          name={display_name}
          role={role}
          onCancelPress={() => onClose()}
          onUpdatePress={(name, role, about) => handleUpdateProfile(name, role, about)}
        />
      ) : (
        <ProfileView avatar={avatar_url} email={email} name={display_name} role={role}></ProfileView>
      )}
    </React.Fragment>
  )
}

Profile.navigationOptions = ({ navigation }) => ({
  title: PROFILE_PAGE_PATH,
  headerLeft: <HeaderIcon name="menu" onPress={() => navigation.toggleDrawer()} />,
  headerRight: (
    <HeaderIcon
      name="settings"
      onPress={() => navigation.setParams({ editMode: true }) /*Make menu with 'Edit' option */}
    />
  ),
})

export default Profile
