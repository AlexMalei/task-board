import React from 'react'
import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'

import Avatar from '@/fields/Avatar'
import { parseDateTimeFromNow } from '@/helpers'
import { theme } from '@/theme'

import { Container, Date, Header, AuthorTextContainer, AuthorName, AuthorRole, Content } from './component'

const AVATAR_BORDER_WIDTH = 3
const AVATAR_SIZE = theme.avatarSizes.small + AVATAR_BORDER_WIDTH

const Comment = ({
  comment: {
    content,
    created_at: creationDate,
    user: { display_name: authorName, avatar_url: avatarUrl, role },
  },
}) => {
  return (
    <Container>
      <Avatar avatarUrl={avatarUrl} userName={authorName} size={AVATAR_SIZE} containerStyle={styles.avatar} />
      <Header>
        <AuthorTextContainer>
          <AuthorName>{`${authorName}, `}</AuthorName>
          <AuthorRole>{role}</AuthorRole>
        </AuthorTextContainer>
        <Date>{parseDateTimeFromNow(creationDate)}</Date>
      </Header>
      <Content>{content}</Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  avatar: {
    zIndex: 10,
    position: 'absolute',
    top: 20,
    left: -AVATAR_SIZE / 2,

    borderWidth: normalize(AVATAR_BORDER_WIDTH),
    borderColor: theme.colors.white,
    borderRadius: normalize(theme.avatarSizes.small / 2),
  },
})

export default Comment
