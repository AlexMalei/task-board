import styled from 'styled-components'

export const StyledContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  padding: 15px;
  min-height: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  border-color: ${({ isActive }) => (isActive ? 'red' : 'white')};
  border-width: ${({ isActive }) => (isActive ? 2 : 0)};
`
