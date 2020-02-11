import React from 'react'
import { StyleSheet } from 'react-native'
import { theme } from '@/theme'

import { StyledRow, StyledPost, StyleTextActivity, StyleTextData } from './component'
import { parseActivityOnlyTime } from '@/helpers'
import Avatar from '@/fields/Avatar'

const Notice = ({ notice }) => {
  const { created_at, name, user } = notice

  return (
    <StyledRow>
      <StyledPost>
        <Avatar
          size={theme.avatarSizes.small}
          overlayContainerStyle={{ backgroundColor: theme.colors.lightGreen }}
          icon={{ name: 'check', color: theme.colors.darkGrayGreen, type: 'font-awesome', size: theme.fontSizes[3] }}
        />
        <StyleTextActivity>
          {user.display_name} created task "{name}"`
        </StyleTextActivity>
        <StyleTextData>{parseActivityOnlyTime(created_at)}</StyleTextData>
      </StyledPost>
    </StyledRow>
  )
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: theme.colors.darkGrayGreen,
  },
})

export default Notice
