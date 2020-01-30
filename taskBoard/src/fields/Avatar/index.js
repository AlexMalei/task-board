import React from 'react'
import { Avatar as ReactAvatar } from 'react-native-elements'
import normalize from 'react-native-normalize'

import { getInitials } from '@/utils'
import { theme } from '@/theme'

const DEFAULT_USER_NAME = 'No Name'

const Avatar = ({
  avatarUrl,
  userName,
  size,
  onPickImage,
  onHandleUploadAvatar,
  update,
  containerStyle,
  avatarStyle,
}) => {
  return avatarUrl ? (
    <ReactAvatar
      containerStyle={containerStyle}
      avatarStyle={avatarStyle}
      onPress={() => update && onPickImage(onHandleUploadAvatar)}
      rounded
      size={normalize(size)}
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
  avatarStyle: {},
  userName: DEFAULT_USER_NAME,
}

export default Avatar
