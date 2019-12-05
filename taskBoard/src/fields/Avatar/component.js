import styled from 'styled-components'

export const StyledAvatarContainer = styled.View`
  flex: 1;
  align-items: center;
  /* width: 100%; */

  border: 1px solid red;
`

export const StyledButton = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  width: ${props => props.theme.avatarSizes[props.size]};
  height: ${props => props.theme.avatarSizes[props.size]};

  border-radius: ${props => props.theme.avatarSizes[props.size]};
`
