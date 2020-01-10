import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { theme } from '@/theme'

import {
  StyledBorderContainer,
  StyledDataContainer,
  StyledContainer,
  StyledContentContainer,
  StyledTitle,
  StyledSubtitle,
} from './component'

const ProfileDataItem = ({ icon, title, subtitle }) => {
  return (
    <StyledBorderContainer>
      <StyledDataContainer>
        <StyledContainer>
          {icon && <Icon name={icon} size={24} style={{ color: theme.colors.black, marginRight: 20 }} />}
        </StyledContainer>

        <StyledContentContainer>
          <StyledTitle>{title}</StyledTitle>
          {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
        </StyledContentContainer>
      </StyledDataContainer>
    </StyledBorderContainer>
  )
}

ProfileDataItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default ProfileDataItem
