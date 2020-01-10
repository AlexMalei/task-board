import styled from 'styled-components'

export const StyledProfileContainer = styled.View`
  flex: 1;
`
export const StyledAvatarSection = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white};
`

export const StyledDetailsSection = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`
