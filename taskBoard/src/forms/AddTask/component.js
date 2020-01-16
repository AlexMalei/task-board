import styled from 'styled-components'

export const StyledHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 0 10px 0;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.lightGrey};
`

export const StyledHeaderText = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[7]};
`
