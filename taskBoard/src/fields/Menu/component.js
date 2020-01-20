import styled from 'styled-components'

export const StyledMenuContainer = styled.View`
  justify-content: center;
  width: 100%;
  padding: 20px 0;
`

export const StyledMenuTitle = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`

//@todo: fix height of text container according to another fields
export const StyledMenuTextContainer = styled.Text`
  justify-content: center;
  padding: 15px 20px;
  height: 50px;

  border-radius: 8px;
  background-color: ${props => props.theme.colors.darkGrey};
`
