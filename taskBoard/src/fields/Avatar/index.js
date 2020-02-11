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
  overlayContainerStyle,
  icon,
}) => {
  return avatarUrl ? (
    <ReactAvatar
      containerStyle={containerStyle}
      overlayContainerStyle={overlayContainerStyle}
      rounded
      size={normalize(size)}
      avatarStyle={avatarStyle}
      onPress={() => update && onPickImage(onHandleUploadAvatar)}
      source={{ uri: avatarUrl }}
    />
  ) : (
    <ReactAvatar
      containerStyle={containerStyle}
      overlayContainerStyle={overlayContainerStyle}
      rounded
      size={size}
      icon={icon}
      title={icon ? null : getInitials(userName)}
    />
  )
}

Avatar.defaultProps = {
  size: theme.avatarSizes.medium,
  edit: false,
  containerStyle: {},
  avatarStyle: {},
  userName: DEFAULT_USER_NAME,
  overlayContainerStyle: {},
}

export default Avatar
