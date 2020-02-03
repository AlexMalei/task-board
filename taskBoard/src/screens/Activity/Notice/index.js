import React from 'react'
import { Avatar } from 'react-native-elements'
import { theme } from '@/theme'

import { StyledRow, StyledPost, StyleTextActivity, StyleTextData } from './component'
import { parseActivityOnlyTime } from '@/helpers'

const Notice = ({ notice }) => {
  console.log('notice', notice)
  const { created_at, name, user } = notice

  return (
    <StyledRow>
      <StyledPost>
        <Avatar
          rounded
          size={theme.avatarSizes.small}
          overlayContainerStyle={{ backgroundColor: '#CEF9C6' }}
          icon={{ name: 'check', color: '#1D201C', type: 'font-awesome', size: 20 }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
        <StyleTextActivity>
          {user.display_name} created task "{name}"`
        </StyleTextActivity>
        <StyleTextData>{parseActivityOnlyTime(created_at)}</StyleTextData>
      </StyledPost>
    </StyledRow>
  )
}

export default Notice
