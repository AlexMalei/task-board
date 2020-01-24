import styled from 'styled-components'

export const StyledTypeLabel = styled.Text`
  padding: 3px 6px;
  align-self: flex-start;

  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  border-radius: 11px;

  text-transform: uppercase;
`
