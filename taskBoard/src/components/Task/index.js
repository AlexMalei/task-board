import React from 'react'
import { StyleSheet, View } from 'react-native'

import CheckBox from '@/fields/Checkbox'
import TaskType from '@/components/TaskType'
import {
  StyledContainer,
  StyledContent,
  StyledCheckBoxContainer,
  StyledFooter,
  StyledUserAvatar,
  StyledTaskDescription,
} from './component'

import { theme } from '@/theme'

const Task = ({
  checkBoxVisibility,
  onCheckBoxPress,
  task: { id, content, name, order, published, user, type },
  onPress,
  containerType: Component,
}) => {
  const { avatar_url: avatarUrl, display_name: userName } = user || {}

  const handleCheckBoxPress = () => {
    onCheckBoxPress(id, published)
  }

  return (
    <StyledContainer
      as={Component}
      onPress={onPress}
      style={checkBoxVisibility ? styles.containerWithCheckBox : styles.containerWithoutCheckBox}
    >
      {checkBoxVisibility && (
        <StyledCheckBoxContainer size={theme.checkBoxSizes.small}>
          <CheckBox checked={published} onPress={handleCheckBoxPress} />
        </StyledCheckBoxContainer>
      )}
      <StyledTaskDescription>
        <StyledContent>{name}</StyledContent>
        <StyledFooter>
          <StyledUserAvatar
            containerStyle={styles.avatarContainerStyle}
            userName={userName}
            avatarUrl={avatarUrl}
            size={theme.avatarSizes.xsmall}
          />
          <TaskType type={type} />
        </StyledFooter>
      </StyledTaskDescription>
    </StyledContainer>
  )
}

const styles = StyleSheet.create({
  containerWithCheckBox: { flexDirection: 'row' },
  containerWithoutCheckBox: { flexDirection: 'column' },

  avatarContainerStyle: {
    marginRight: 5,
  },
})

Task.defaultProps = {
  checkBoxVisibility: false,
  onPress: () => {},
  containerComponent: View,
}

export default Task
