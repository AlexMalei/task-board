import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { useSubscription, useMutation } from '@apollo/react-hooks'

import ProfileView from '@/components/ProfileView'
import HeaderIcon from '@/components/HeaderIcon'
import ProfileForm from '@/forms/Profile'
import { PROFILE_DATA_SUBSCRIPTION } from '@/subscriptions'
import { UPDATE_PROFILE_DATA } from '@/mutations'
import { useAsync } from '@/hooks'
import { PROFILE_PAGE_PATH } from '@/constants'
import { getUserIdFromToken } from '@/helpers'

const Profile = ({ navigation: { state, setParams } }) => {
  const [editMode, setEditMode] = useState(false)
  const { data: userId } = useAsync(getUserIdFromToken)
  const { loading: profileLoading, error: profileError, data } = useSubscription(PROFILE_DATA_SUBSCRIPTION, {
    variables: { id: userId || '' },
  })

  const [updateProfile] = useMutation(UPDATE_PROFILE_DATA)

  const onClose = () => {
    setEditMode(false)
  }

  const handleUpdateProfile = (name, role, about) => {
    updateProfile({ variables: { id: userId, role, name, about } })
    onClose()
  }

  const { about_me: aboutMe, avatar_url: avatarUrl, display_name: displayName, role, email } = data?.users_by_pk || {}

  const { params } = state
  const editModeParam = params?.editMode

  useEffect(() => {
    if (editModeParam && editMode !== editModeParam) {
      setEditMode(editModeParam)
      setParams({ editMode: false })
    }
  })

  return (
    <React.Fragment>
      {profileLoading ? (
        <ActivityIndicator size="large" />
      ) : editMode ? (
        <ProfileForm
          about={aboutMe}
          avatarUrl={avatarUrl}
          name={displayName}
          role={role}
          onCancelPress={() => onClose()}
          onUpdatePress={(name, role, about) => handleUpdateProfile(name, role, about)}
        />
      ) : (
        <ProfileView avatar={avatarUrl} email={email} name={displayName} role={role} />
      )}
    </React.Fragment>
  )
}

Profile.navigationOptions = ({ navigation }) => ({
  title: PROFILE_PAGE_PATH,
  headerLeft: <HeaderIcon name="menu" onPress={() => navigation.toggleDrawer()} />,
  headerRight: <HeaderIcon name="settings" onPress={() => navigation.setParams({ editMode: true })} />,
})

export default Profile
