import React, { useState, useEffect, Fragment } from 'react'
import { useSubscription, useMutation } from '@apollo/react-hooks'
import ImagePicker from 'react-native-image-picker'

import ProfileView from '@/components/ProfileView'
import HeaderIcon from '@/components/HeaderIcon'
import ProfileForm from '@/forms/Profile'
import { PROFILE_DATA_SUBSCRIPTION } from '@/subscriptions'
import { UPDATE_PROFILE_DATA } from '@/mutations'
import { PROFILE_PAGE_PATH } from '@/constants'
import { getUserIdFromToken } from '@/helpers'
import Spinner from '@/components/Spinner'
import firebase from '@/firebase'
import { useAsync } from '@/hooks'

const Profile = ({ navigation: { state, setParams } }) => {
  const [editMode, setEditMode] = useState(false)
  const [updateProfile] = useMutation(UPDATE_PROFILE_DATA)

  const { data: userId } = useAsync(getUserIdFromToken)
  const { loading: profileLoading, error: profileError, data } = useSubscription(PROFILE_DATA_SUBSCRIPTION, {
    variables: { id: userId || '' },
  })
  const { id, about_me: aboutMe, avatar_url: avatarUrl, display_name: displayName, role, email } =
    data?.users_by_pk || {}

  const { params } = state
  const editModeParam = params?.editMode

  useEffect(() => {
    if (editModeParam && editMode !== editModeParam) {
      setEditMode(editModeParam)
      setParams({ editMode: false })
    }
  })

  const onClose = () => {
    setEditMode(false)
  }

  const handleUpdateProfile = (name, role, about, avatar) => {
    uploadImage(avatar, id).then(url => {
      updateProfile({
        variables: { id: userId, role, name, about, avatarUrl: url },
      })
      onClose()
    })
  }

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

  const onPickImagePress = async onChangeUrlAvatar => {
    ImagePicker.showImagePicker({}, response => {
      if (response.didCancel) {
        alert('You cancelled image picker 😟')
      } else if (response.error) {
        alert('And error occured: ', response.error)
      } else {
        onChangeUrlAvatar(response.uri)
      }
    })
  }

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
          onPickImage={value => onPickImagePress(value)}
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
