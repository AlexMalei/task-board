import styled from 'styled-components'

export const InputTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`

export const TextInput = styled.TextInput`
  padding-left: 20px;
  margin-bottom: 40px;

  border-radius: 8px;
  background-color: ${props => props.theme.colors.darkGrey};
`
