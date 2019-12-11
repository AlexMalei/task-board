import styled from 'styled-components'

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Button = styled.TouchableHighlight.attrs(({ useBackground, theme }) => ({
  underlayColor: useBackground ? theme.colors.lightGreen : theme.colors.white,
}))`
  width: 70%;
  padding: 15px;

  ${({ useBackground, theme }) => useBackground && `background-color:${theme.colors.lightGreen}`}
  border-radius: 25px;
`

export const ButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 14px;
`
