import React from 'react'
import { Avatar as ReactAvatar } from 'react-native-elements'

import { getInitials } from '@/utils'
import { theme } from '@/theme'

const DEFAULT_USER_NAME = 'No Name'

const Avatar = ({ avatarUrl, userName, size, onPickImage, onHandleUploadAvatar, update, containerStyle }) => {
  return avatarUrl ? (
    <ReactAvatar
      containerStyle={containerStyle}
      onPress={() => update && onPickImage(onHandleUploadAvatar)}
      rounded
      size={size}
      source={{ uri: avatarUrl }}
    />
  ) : (
    <ReactAvatar containerStyle={containerStyle} rounded size={size} title={getInitials(userName)} />
  )
}

Avatar.defaultProps = {
  size: theme.avatarSizes.medium,
  edit: false,
  containerStyle: {},
  userName: DEFAULT_USER_NAME,
}

export default Avatar
