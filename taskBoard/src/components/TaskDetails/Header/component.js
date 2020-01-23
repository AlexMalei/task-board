import styled from 'styled-components'

export const HeaderContainer = styled.View`
  margin-bottom: 20px;
`

export const TaskName = styled.Text`
  margin-bottom: 10px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
`

export const CreationData = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`
