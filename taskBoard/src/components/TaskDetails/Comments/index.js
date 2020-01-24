import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { useMutation } from '@apollo/react-hooks'

import Avatar from '@/fields/Avatar'
import CommentsList from '@/components/Comments'
import Input from '@/fields/Input'
import { theme } from '@/theme'
import { ADD_COMMENT } from '@/mutations'
import { CommentsSectionContainer, CommentAddContainer, SectionLabel } from './component'

//@todo: fix handle submit touch (now need lose focus on input(close keyboard) and click on submit button)
const Comments = ({
  user: { id: loggedUserId, avatar_url: avatarUrl, display_name: currentUserName },
  comments,
  taskId,
}) => {
  const [content, setContent] = useState('')

  const [addComment] = useMutation(ADD_COMMENT)
  const handleInputSubmit = () => {
    addComment({ variables: { content, userId: loggedUserId, taskId } })
    setContent('')
  }

  return (
    <CommentsSectionContainer>
      <SectionLabel>Discussion</SectionLabel>
      <CommentAddContainer>
        <Avatar avatarUrl={avatarUrl} userName={currentUserName} size={theme.avatarSizes.small} />
        <Input
          placeholder="Add a comment..."
          containerStyle={styles.commentInput}
          inputStyle={styles.inputStyle}
          value={content}
          onChangeText={content => setContent(content)}
          submitButton
          disableSubmitButton={content.length === 0}
          onSubmit={handleInputSubmit}
          containerStyle={styles.inputContainerStyle}
        />
      </CommentAddContainer>
      <CommentsList comments={comments} />
    </CommentsSectionContainer>
  )
}

const styles = StyleSheet.create({
  commentInput: {
    marginVertical: 0,
    marginLeft: 10,
  },
  inputContainerStyle: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  inputStyle: {
    flex: 1,
    height: 40,
    paddingRight: 40,
  },
})

export default Comments
