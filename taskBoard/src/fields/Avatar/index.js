import React from 'react'
import { Avatar as ReactAvatar } from 'react-native-elements'

import { StyledAvatarContainer } from './component'
import { getInitials } from '@/utils'

const DEFAULT_USER_NAME = 'No Name'

const Avatar = ({ avatarUrl, name, size, edit }) => {
  return (
    <StyledAvatarContainer>
      {avatarUrl ? (
        <ReactAvatar rounded size={size} source={{ uri: avatarUrl }} />
      ) : (
        <ReactAvatar rounded size={size} title={getInitials(name || DEFAULT_USER_NAME)} />
      )}
    </StyledAvatarContainer>
  )
}

Avatar.defaultProps = {
  size: 'medium',
  edit: false,
}

export default Avatar
