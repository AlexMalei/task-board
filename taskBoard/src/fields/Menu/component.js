import styled from 'styled-components'

export const StyledMenuContainer = styled.View`
  flex: 1;
  justify-content: center;
`

export const StyledMenuTitle = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
