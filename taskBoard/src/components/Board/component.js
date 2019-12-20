import styled from 'styled-components'

export const StyledContainer = styled.View`
  flex: 1;
  align-self: stretch;
  margin: 20px;
  padding: 20px;
  height: 200px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`

export const StyledTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: bold;
`

export const StyledBoardHeader = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`
