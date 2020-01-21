import React from 'react'
import { StyleSheet } from 'react-native'

import CheckBox from '@/fields/Checkbox'
import {
  StyledContainer,
  StyledContent,
  StyledCheckBoxContainer,
  StyledFooter,
  StyledUserAvatar,
  StyledTaskDescription,
  StyledTypeLabel,
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
    type: { name: typeName, color, background_color },
  },
}) => {
  const typeStyle = { color, backgroundColor: background_color }

  const handleCheckBoxPress = () => {
    onCheckBoxPress(id, published)
  }

  return (
    <StyledContainer style={checkBoxVisibility ? styles.containerWithCheckBox : styles.containerWithoutCheckBox}>
      {checkBoxVisibility && (
        <StyledCheckBoxContainer size={theme.checkBoxSizes.small}>
          <CheckBox checked={published} onPress={handleCheckBoxPress} />
        </StyledCheckBoxContainer>
      )}
      <StyledTaskDescription>
        <StyledContent>{name}</StyledContent>
        <StyledFooter>
          <StyledUserAvatar
            //@todo: fix
            userName={'Alexander Malei' /* userName */}
            //@todo: fix
            avatarUrl={
              'https://firebasestorage.googleapis.com/v0/b/education-board-api.appspot.com/o/tutorials%2Fimages%2Fs1AfPA8IwAZBBiYZs3XqRAaav5s1?alt=media&token=8449011e-27a7-45eb-927d-6bd524d6df95' /* avatarUrl */
            }
            size={theme.avatarSizes.xsmall}
          ></StyledUserAvatar>
          <StyledTypeLabel style={typeStyle}>{typeName}</StyledTypeLabel>
        </StyledFooter>
      </StyledTaskDescription>
    </StyledContainer>
  )
}

const styles = StyleSheet.create({
  containerWithCheckBox: { flexDirection: 'row' },
  containerWithoutCheckBox: { flexDirection: 'column' },
})

Task.defaultProps = {
  checkBoxVisibility: false,
}

export default Task
