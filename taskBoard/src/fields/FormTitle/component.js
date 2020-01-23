import styled from 'styled-components'

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 50px 0 50px 0;
  margin-bottom: 20px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.lightGrey};
`

export const Title = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[7]};
`
