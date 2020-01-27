import styled from 'styled-components'

export const HeaderContainer = styled.View`
  flex: 1;
  margin-bottom: 20px;
`

export const TaskCreationContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

export const Author = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`

export const Date = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[2]};

  text-transform: lowercase;
`

export const TaskName = styled.Text`
  margin-bottom: 10px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
`
