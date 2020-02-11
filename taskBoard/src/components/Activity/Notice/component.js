import styled from 'styled-components'

export const StyledRow = styled.View`
  flex: 1;
  padding: 10px 0px;
`
export const StyledPost = styled.View`
  flex-direction: row;
  align-content: space-between;
`
export const StyleTextActivity = styled.Text`
  flex: 7;
  padding: 0px 10px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
`
export const StyleTextData = styled.Text`
  flex: 2;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`
