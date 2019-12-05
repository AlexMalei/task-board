import React from 'react'
import { Image, Text } from 'react-native'

import { StyledAvatarContainer, StyledButton } from './component'
import { getInitials, getAvatarColor } from '@/utils'

const Avatar = ({ avatarUrl, name, size = 'medium', edit = false }) => {
  if (!avatarUrl) {
    const userInitials = name ? getInitials(name) : 'NN' /*No name*/
    const avatarColor = getAvatarColor(name)
  }

  return (
    <StyledAvatarContainer>
      <StyledButton size={size} onPress={() => console.log('onPressAvatar')}>
        <Text>TEXT</Text>
      </StyledButton>
    </StyledAvatarContainer>
  )
}

export default Avatar
