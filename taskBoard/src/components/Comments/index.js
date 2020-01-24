import React from 'react'
import { View, Text } from 'react-native'

import { CommentsContainer, NoCommentsLabel } from './component'
import Comment from '@/components/Comment'

const Comments = ({ comments }) => {
  return (
    <CommentsContainer>
      {comments.length > 0 ? (
        comments.map(comment => <Comment comment={comment} />)
      ) : (
        <NoCommentsLabel>There are no comments for this task!</NoCommentsLabel>
      )}
    </CommentsContainer>
  )
}

export default Comments
