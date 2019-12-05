import React, { useEffect } from 'react'
import { Button, View, ActivityIndicator } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import jwtDecode from 'jwt-decode'

import { StyledErrorText } from './component'
import { getJwtToken, PROFILE_DATA_QUERY } from '@/utils'
import { useAsync } from '@/hooks'
import ProfileForm from '@/forms/Profile'

const getCurrentUserId = async () => {
  const jwtToken = await getJwtToken()
  const { user_id } = await jwtDecode(jwtToken)

  return user_id
}

import { PROFILE_PAGE_PATH } from '@/constants'
import IconMenu from '../IconMenu'

const Profile = () => {
  const { loading: loadingUserId, error: userIdError, data: userId } = useAsync(getCurrentUserId)
  const { loading: profileLoading, error: profileError, data, refetch } = useQuery(PROFILE_DATA_QUERY, {
    variables: { id: userId || '' },
  })
  useEffect(() => {
    refetch()
  }, [])

  const { users_by_pk: { about_me = '', avatar_url = '', display_name = '', role = '' } = {} } = data || {}

  return (
    <React.Fragment>
      {loadingUserId && profileLoading && <ActivityIndicator size="large" />}
      {userIdError && <Text>{userIdError}</Text>}
      {profileError && <Text>{profileError}</Text>}
      <ProfileForm about={about_me} avatarUrl={avatar_url} name={display_name} role={role} />
    </React.Fragment>
  )
}

Profile.navigationOptions = ({ navigation }) => ({
  title: PROFILE_PAGE_PATH,
  headerLeft: <IconMenu navigation={navigation} />,
})

export default Profile
