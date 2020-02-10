import styled from 'styled-components'

export const Container = styled.ScrollView`
  padding: 20px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const HeaderTitle = styled.Text`
  margin-right: 10px;

  font-size: ${({ theme }) => theme.fontSizes[5]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.fontSizes[7]};
`

export const HeaderParticipantsCount = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes[5]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.fontSizes[7]};
  color: ${({ theme }) => theme.colors.codGray};
  opacity: 0.7;
`
