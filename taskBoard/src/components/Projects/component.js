import styled from 'styled-components'

export const StyledProjectsContainer = styled.View`
  flex: 1;
  margin: 10px;
`

export const StyledPageTitle = styled.Text`
  padding-bottom: 5px;

  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
`
