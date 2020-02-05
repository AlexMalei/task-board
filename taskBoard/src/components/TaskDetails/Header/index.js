import React from 'react'
import { StyleSheet } from 'react-native'

import Menu from '@/fields/Menu'
import { parseDateTimeFromNow } from '@/helpers'
import {
  HeaderContainer,
  TaskName,
  TaskCreationContainer,
  Author,
  Date,
  TopRow,
  IconsContainer,
  IconContainer,
  StyledCheckIcon,
  StyledDetailsIcon,
} from './component'

//@todo: add icons on top of screen
const Header = ({ name, authorName, creationDate, onTaskDelete, onTaskEdit, onAddParticipant }) => {
  const detailsItems = [
    {
      name: 'Edit',
      onPress: () => {
        onTaskEdit()
      },
    },
    {
      name: 'Delete',
      onPress: () => {
        onTaskDelete()
      },
    },
    {
      name: 'Add participant',
      onPress: () => {
        onAddParticipant()
      },
    },
  ]

  return (
    <HeaderContainer>
      <TopRow>
        <TaskName style={{ includeFontPadding: false }}>{name}</TaskName>
        <IconsContainer>
          <Menu>
            <IconContainer activeOpacity={0.8} style={styles.checkIcon}>
              <StyledCheckIcon name="check" />
            </IconContainer>
          </Menu>
          <Menu items={detailsItems} visibleFieldName="name" handleItemPress={item => item.onPress()}>
            <IconContainer activeOpacity={0.8} style={styles.detailsIcon}>
              <StyledDetailsIcon name="more-horiz" />
            </IconContainer>
          </Menu>
        </IconsContainer>
      </TopRow>

      <TaskCreationContainer>
        <Author>{`Added by ${authorName}, `}</Author>
        <Date>{parseDateTimeFromNow(creationDate)}</Date>
      </TaskCreationContainer>
    </HeaderContainer>
  )
}

const styles = StyleSheet.create({
  checkIcon: {
    borderRadius: 4,
  },
  detailsIcon: {
    borderRadius: 20,
  },
})

export default Header
