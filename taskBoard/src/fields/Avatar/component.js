import styled, { css } from 'styled-components'

const avatarSizeMixin = css`
  width: ${props => props.theme.avatarSizes[props.size]};
  height: ${props => props.theme.avatarSizes[props.size]};
`

export const StyledAvatarContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const StyledAvatarButton = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;

  ${avatarSizeMixin}
  border-radius: ${props => props.theme.avatarSizes[props.size]};
  ${({ color }) => color || `background-color: ${color};`}
`

export const StyledAvatar = styled.Image`
  ${avatarSizeMixin}
`

export const StyledInitials = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 40px;
`
