import styled from 'styled-components'

export const StyledFormContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;

  padding: 20px;
  padding-bottom: 30px;

  border-radius: 10px;
  background-color: ${props => props.theme.colors.white};
`
