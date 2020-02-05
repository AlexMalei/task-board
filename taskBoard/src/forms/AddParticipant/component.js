import styled from 'styled-components'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

import { StyledHeaderContainer as HeaderContainer, StyledHeaderText as HeaderText } from '@/forms/AddTask/component'

export const StyledHeaderContainer = styled(HeaderContainer)``

export const StyledHeaderText = styled(HeaderText)``

export const MenuButton = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 15px 10px 15px 20px;

  border-radius: 8px;
  background-color: ${props => props.theme.colors.darkGrey};
`

export const MenuButtonText = styled.Text``

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 0 0 0 10px;

  background-color: ${({ theme }) => theme.colors.darkGrey};
`

export const StyledIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.fontSizes[5]};
  color: ${({ theme }) => theme.colors.gray};
`
