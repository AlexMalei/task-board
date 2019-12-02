import styled from 'styled-components'

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 50px 0 50px 0;
  margin-bottom: 20px;

  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.lightGrey};
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 36px;
`
