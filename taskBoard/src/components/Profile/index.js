import React from 'react'
import { Button } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import jwtDecode from 'jwt-decode'

import { getJwtToken, PROFILE_DATA_QUERY } from '@/utils'
import { useAsync } from '@/hooks'
import ProfileForm from '@/forms/Profile'

const getCurrentUserId = async () => {
  const jwtToken = await getJwtToken()
  const { user_id } = await jwtDecode(jwtToken)

  return user_id
}

const Profile = () => {
  const { loading: loadingUserId, error: userIdError, data: userId } = useAsync(getCurrentUserId)
  const { loading: profileLoading, error: profileError, data } = useQuery(PROFILE_DATA_QUERY, {
    variables: { id: userId },
  })
  console.log('data', data)
  const { users_by_pk: { about_me = '', avatar_url = '', display_name = '', role = '' } = {} } = data || {}
  console.log('role', role)
  console.log('display_name', display_name)
  console.log('avatar_url', avatar_url)
  console.log('about_me', about_me)

  return <ProfileForm about={about_me} avatarUrl={avatar_url} name={display_name} role={role} />
}

Profile.navigationOptions = ({ navigation }) => ({
  title: 'Profile',
  headerLeft: (
    <Button
      source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
      onPress={() => navigation.toggleDrawer()}
      title="Ic"
    />
  ),
})

export default Profile
