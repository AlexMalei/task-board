import styled from 'styled-components'

export const StyledContainer = styled.TouchableOpacity`
  z-index: 10;

  flex: 1;
  flex-direction: column;
  align-self: stretch;
  margin: 20px;
  padding: 20px;
  min-height: 100px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;

  border-color: ${({ isActive }) => (isActive ? 'red' : 'white')};
  border-width: ${({ isActive }) => (isActive ? 2 : 0)};
`
export const StyledBoardHeader = styled.View`
  z-index: 11;

  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const StyledTitle = styled.Text`
  z-index: 11;

  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const StyledTasksContainer = styled.View`
  flex: 1;
`
