import styled from 'styled-components'

export const Container = styled.View`
  margin: 10px 0 10px ${({ theme }) => theme.avatarSizes.small / 2}px;
  padding: 20px 20px 20px 40px;

  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[1]};

  background-color: ${({ theme }) => theme.colors.cararra};
  border-radius: 10px;
`

export const Date = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[0]};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
`

export const AuthorTextContainer = styled.View`
  flex-direction: row;
  margin-right: 10px;
`

export const AuthorName = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[1]};
`

export const AuthorRole = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  text-align: center;

  text-transform: capitalize;
`

export const Content = styled.Text``
