import styled from 'styled-components'

export const StyledTestText = styled.Text`
  position: absolute;
  font-size: ${({ theme }) => theme.fontSizes[9]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  left: 47%;
  top: 60%;
  color: ${({ color }) => (color ? color : 'black')};
`
