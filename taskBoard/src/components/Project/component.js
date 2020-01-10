import styled from 'styled-components'

export const StyledProjectContainer = styled.View`
  flex: 1;
  margin: 10px;
  padding: 15px 10px;

  border-radius: 10px;
`

export const StyledProjectTitle = styled.Text`
  margin-bottom: 10px;

  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
`

export const StyledText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`
