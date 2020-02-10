import styled from 'styled-components'

export const MemberContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.cararra};
  border-radius: 10px;
`

export const MemberData = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`

export const MemberAvatar = styled.View`
  flex-direction: row;
`

export const MemberTextData = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 15px;
`

export const MemberName = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: ${({ theme }) => theme.fontSizes[5]};
  color: ${({ theme }) => theme.colors.codGray};
`

export const MemberRole = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.fontSizes[3]};
  color: ${({ theme }) => theme.colors.codGray};
  opacity: 0.7;
`

export const CompletedTasksContainer = styled.View``

export const CompletedTasksCount = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: ${({ theme }) => theme.fontSizes[7]};
  text-align: right;
  color: ${({ theme }) => theme.colors.codGray};
`

export const CompletedTasksText = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.fontSizes[3]};
  text-align: right;
  color: ${({ theme }) => theme.colors.codGray};
  opacity: 0.7;

  text-transform: uppercase;
`
