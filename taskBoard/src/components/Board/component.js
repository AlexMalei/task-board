import styled from 'styled-components'

export const StyledContainer = styled.TouchableOpacity`
  z-index: 10;

  flex: 1;
  align-self: stretch;
  margin: 20px;
  padding: 20px;
  height: 200px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;

  border-color: ${({ isActive }) => (isActive ? 'red' : 'white')};
  border-width: ${({ isActive }) => (isActive ? 2 : 0)};
`

export const StyledTitle = styled.Text`
  z-index: 11;

  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: bold;
`

export const StyledBoardHeader = styled.View`
  z-index: 11;

  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`
