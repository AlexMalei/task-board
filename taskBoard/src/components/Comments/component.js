import styled from 'styled-components'

export const CommentsContainer = styled.View`
  margin-top: 10px;
`

export const NoCommentsLabel = styled.Text`
  padding: 20px 0;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`
