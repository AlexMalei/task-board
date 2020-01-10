import React from 'react'
import { StyleSheet } from 'react-native'
import { Avatar as ReactAvatar } from 'react-native-elements'

import { StyledAvatarContainer } from './component'
import { getInitials } from '@/utils'
import { theme } from '@/theme'

const DEFAULT_USER_NAME = 'No Name'

const Avatar = ({ avatarUrl, userName, size, edit }) => {
  return avatarUrl ? (
    <ReactAvatar
      rounded
      size={size}
      source={{ uri: avatarUrl }}
      avatarStyle={{
        //@todo: try to fix this
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'white',
        borderTopLeftRadius: 1,
        borderStyle: 'solid',
      }}
    />
  ) : (
    <ReactAvatar rounded size={size} title={getInitials(userName || DEFAULT_USER_NAME)} />
  )
}

Avatar.defaultProps = {
  size: theme.avatarSizes.medium,
  edit: false,
}

export default Avatar
