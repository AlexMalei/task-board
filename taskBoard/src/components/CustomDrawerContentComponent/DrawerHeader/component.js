import styled from 'styled-components'
import { Header } from 'native-base'
import { TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

export const StyledDrawerHeader = styled(Header)`
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  height: 80;
  background-color: ${({ theme }) => theme.colors.codGray};
`
export const StyledDrawerImageProfile = styled.Image`
  justify-content: center;
  height: 48;
  width: 48;
  border-radius: 75;
`
export const StyledDrawerProfileText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.white};
`
export const StyledDrawerTextGray = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes[1]};
  color: ${({ theme }) => theme.colors.gray};
`
export const StyledDrawerIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.fontSizes[6]};
  color: ${({ theme }) => theme.colors.gray};
`
export const StyledTouchable = styled(TouchableHighlight)`
  flex: 1;
  justify-content: space-around;
  flex-direction: row;
`
