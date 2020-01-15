import React, { useState, useEffect, Fragment } from 'react'
import { useSubscription, useMutation } from '@apollo/react-hooks'

import ProfileView from '@/components/ProfileView'
import HeaderIcon from '@/components/HeaderIcon'
import ProfileForm from '@/forms/Profile'
import { PROFILE_DATA_SUBSCRIPTION } from '@/subscriptions'
import { UPDATE_PROFILE_DATA } from '@/mutations'
import { useAsync } from '@/hooks'
import { PROFILE_PAGE_PATH } from '@/constants'
import { getUserIdFromToken } from '@/helpers'
import Spinner from '@/fields/Spinner'
import firebase from '@/firebase'

const Profile = ({ navigation: { state, setParams } }) => {
  const [editMode, setEditMode] = useState(false)

  const { data: userId } = useAsync(getUserIdFromToken)
  const { loading: profileLoading, error: profileError, data } = useSubscription(PROFILE_DATA_SUBSCRIPTION, {
    variables: { id: userId || '' },
  })
  const { id, about_me: aboutMe, avatar_url: avatarUrl, display_name: displayName, role, email } =
    data?.users_by_pk || {}

  const [updateProfile] = useMutation(UPDATE_PROFILE_DATA)

  const { params } = state
  const editModeParam = params?.editMode

  const onClose = () => {
    setEditMode(false)
  }

  const handleUpdateProfile = (name, role, about, avatar) => {
    const uploadImage = async (avatar, userId) => {
      const response = await fetch(avatar)
      const blob = await response.blob()

      const ref = firebase
        .storage()
        .ref()
        .child(`tutorials/images/${userId}`)

      await ref.put(blob)
      return ref.getDownloadURL()
    }

    uploadImage(avatar, id).then(url => {
      updateProfile({
        variables: { id: userId, role, name, about, avatarUrl: url },
      })
      onClose()
    })
  }

  useEffect(() => {
    if (editModeParam && editMode !== editModeParam) {
      setEditMode(editModeParam)
      setParams({ editMode: false })
    }
  })

  return (
    <Fragment>
      {profileLoading ? (
        <Spinner />
      ) : editMode ? (
        <ProfileForm
          id={id}
          about={aboutMe}
          avatar={avatarUrl}
          name={displayName}
          role={role}
          onCancelPress={() => onClose()}
          onUpdatePress={(name, role, about, avatar) => handleUpdateProfile(name, role, about, avatar)}
        />
      ) : (
        <ProfileView email={email} name={displayName} role={role} avatar={avatarUrl} />
      )}
    </Fragment>
  )
}

Profile.navigationOptions = ({ navigation }) => ({
  title: PROFILE_PAGE_PATH,
  headerLeft: <HeaderIcon name="menu" onPress={() => navigation.toggleDrawer()} />,
  headerRight: <HeaderIcon name="settings" onPress={() => navigation.setParams({ editMode: true })} />,
})

export default Profile
