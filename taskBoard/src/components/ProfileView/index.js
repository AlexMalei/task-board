import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '@/fields/Avatar'
import ProfileDataItem from './ProfileDataItem'
import { StyledProfileContainer, StyledAvatarSection, StyledDetailsSection } from './component'
import { theme } from '@/theme'

const ProfileView = ({ avatar, email, name, role }) => {
  return (
    <StyledProfileContainer>
      <StyledAvatarSection>
        <Avatar avatarUrl={avatar} size={theme.avatarSizes.xlarge} userName={name} />
      </StyledAvatarSection>
      <StyledDetailsSection>
        <ProfileDataItem icon="people" title="Name" subtitle={name} />
        <ProfileDataItem icon="mail" title="Email" subtitle={email} />
        <ProfileDataItem icon="work" title="Role" subtitle={role} />
      </StyledDetailsSection>
    </StyledProfileContainer>
  )
}

ProfileView.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
}

ProfileView.defaultProps = {
  name: 'No Name',
  email: 'default.email@gmail.com',
  role: 'Developer',
  avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
}

export default ProfileView
