import styled from 'styled-components'

export const ButtonContainer = styled.View`
  flex: 1;
  align-items: center;
`

export const Button = styled.TouchableOpacity`
  width: 70%;
  padding: 15px;

  background-color: ${props => props.theme.colors.lightGreen};
  border-radius: 25px;
`

export const ButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 14px;
`
