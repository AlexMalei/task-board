import React from 'react'
import { StyleSheet } from 'react-native'

import Avatar from '@/fields/Avatar'
import CommentsList from '@/components/Comments'
import { theme } from '@/theme'
import { CommentsSectionContainer, CommentAddContainer, SectionLabel, CommentInput } from './component'

/*@todo:
  1) Add avatar
  2) Make mutation on comment add
*/
const Comments = ({ user: { avatar_url: avatarUrl, display_name: currentUserName }, comments }) => {
  return (
    <CommentsSectionContainer>
      <SectionLabel>Discussion</SectionLabel>
      <CommentAddContainer>
        <Avatar avatarUrl={avatarUrl} userName={currentUserName} size={theme.avatarSizes.small} />
        <CommentInput placeholder="Add a comment..." containerStyle={styles.commentInput} />
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
})

export default Comments
