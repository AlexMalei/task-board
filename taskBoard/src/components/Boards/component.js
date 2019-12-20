import styled from 'styled-components'

export const StyledBackgroundContainer = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.pampas};
`

export const StyledText = styled.Text`
  color: ${({ theme }) => theme.colors.codGray};
`
