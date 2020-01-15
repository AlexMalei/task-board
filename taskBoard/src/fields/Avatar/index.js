import React, { useState, useEffect } from 'react'
import { Avatar as ReactAvatar } from 'react-native-elements'

import { getInitials } from '@/utils'
import { theme } from '@/theme'

const DEFAULT_USER_NAME = 'No Name'

const Avatar = ({ avatarUrl, userName, size, edit }) => {
  return avatarUrl ? (
    <ReactAvatar rounded size={size} source={{ uri: avatarUrl }} />
  ) : (
    <ReactAvatar rounded size={size} title={getInitials(userName || DEFAULT_USER_NAME)} />
  )
}

Avatar.defaultProps = {
  size: theme.avatarSizes.medium,
  edit: false,
}

export default Avatar
