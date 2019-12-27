import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import {
  StyledContainer,
  StyledContent,
  StyledFooter,
  StyledUserAvatar,
  StyledLabelTypeContainer,
  StyledTypeLabel,
} from './component'

import { theme } from '@/theme'

const Task = ({
  task: {
    content,
    name,
    order,
    user: { avatar_url: avatarUrl, display_name: userName },
    type: { name: typeName, color, background_color },
  },
}) => {
  const typeStyle = { color, backgroundColor: background_color }
  return (
    <StyledContainer>
      <StyledContent>{name}</StyledContent>
      <StyledFooter>
        <StyledUserAvatar userName={userName} avatarUrl={avatarUrl} size={theme.avatarSizes.xsmall}></StyledUserAvatar>
        <StyledTypeLabel style={typeStyle}>{typeName}</StyledTypeLabel>
      </StyledFooter>
    </StyledContainer>
  )
}

export default Task
