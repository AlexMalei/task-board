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

//@todo: fix getting members from tasks, instead of concrete record of user table
const Task = ({
  checkBoxVisibility,
  onCheckBoxPress,
  task: {
    id,
    content,
    name,
    order,
    published,
    user /* : { avatar_url: avatarUrl, display_name: userName } */,
    type /* : { name: typeName, color, background_color } */,
  },
  onPress,
  containerType: Component,
}) => {
  /* const typeStyle = { color, backgroundColor: background_color } */

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
        {/* @todo: fix task name */}
        <StyledContent>Todo</StyledContent>
        <StyledFooter>
          <StyledUserAvatar
            containerStyle={styles.avatarContainerStyle}
            //@todo: fix
            userName={'Alexander Malei' /* userName */}
            //@todo: fix
            avatarUrl={
              'https://firebasestorage.googleapis.com/v0/b/education-board-api.appspot.com/o/tutorials%2Fimages%2Fs1AfPA8IwAZBBiYZs3XqRAaav5s1?alt=media&token=8449011e-27a7-45eb-927d-6bd524d6df95' /* avatarUrl */
            }
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
