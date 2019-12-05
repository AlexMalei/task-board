import styled from 'styled-components'

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;

  border: 1px solid red;
`

export const Button = styled.TouchableOpacity`
  width: 70%;

  background-color: ${props => props.theme.colors.lightGreen};
  border-radius: 25px;
`

export const ButtonText = styled.Text`
  padding: 15px;

  text-align: center;
  font-weight: bold;
  font-size: 14px;
`
