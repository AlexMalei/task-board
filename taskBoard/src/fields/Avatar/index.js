import React from 'react'
import { Image, Text, View } from 'react-native'

import { StyledAvatarContainer, StyledAvatarButton, StyledInitials, StyledAvatar } from './component'
import { getInitials, getAvatarColor } from '@/utils'

const DEFAULT_USER_NAME = 'No Name'

const Avatar = ({ avatarUrl, name, size, edit }) => {
  let noPhotoAvatarColor

  if (!avatarUrl) {
    noPhotoAvatarColor = getAvatarColor(name || DEFAULT_USER_NAME)
  }

  return (
    <StyledAvatarContainer>
      {!avatarUrl ? (
        <StyledAvatarButton
          activeOpacity={0.5}
          underlayColor={noPhotoAvatarColor}
          color={noPhotoAvatarColor}
          size={size}
          onPress={() => console.log('onPressAvatar')}
        >
          <StyledInitials>{getInitials(name || DEFAULT_USER_NAME)}</StyledInitials>
        </StyledAvatarButton>
      ) : (
        <StyledAvatarButton size={size} onPress={() => console.log('onPressAvatar')}>
          <StyledAvatar size={size} source={{ uri: avatarUrl }} />
        </StyledAvatarButton>
      )}
    </StyledAvatarContainer>
  )
}

Avatar.defaultProps = {
  size: 'medium',
  edit: false,
}

export default Avatar
