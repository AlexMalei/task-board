import styled from 'styled-components'

export const StyledInputContainer = styled.View`
  flex: 1;
  justify-content: center;
  width: 100%;
`

export const InputTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`

export const TextInput = styled.TextInput`
  padding-left: 20px;

  border-radius: 8px;
  background-color: ${props => props.theme.colors.darkGrey};
`
