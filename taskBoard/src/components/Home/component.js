import styled from 'styled-components'

export const StyledBackgroundContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.pampas};
`

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 20px 20px 0px 20px;
  padding: 30px;
  border-radius: 10px;
`

export const StyledPageTitle = styled.Text`
  padding-bottom: 20px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const StyledTaskCount = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes[6]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`
