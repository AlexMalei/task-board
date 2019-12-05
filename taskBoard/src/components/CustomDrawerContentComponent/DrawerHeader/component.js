import styled from 'styled-components'
import { Header } from 'native-base'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

export const StyledDrawerHeader = styled(Header)`
  height: 80;
  background-color: ${props => props.theme.colors.codGray};
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`
export const StyledDrawerImageProfile = styled.Image`
  height: 48;
  width: 48;
  border-radius: 75;
  justify-content: center;
`
export const StyledDrawerProfileText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes[2]};
`
export const StyledDrawerTextGray = styled.Text`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes[1]};
`
export const StyledDrawerIcon = styled(Icon)`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes[6]};
`
