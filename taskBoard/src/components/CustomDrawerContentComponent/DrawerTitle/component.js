import styled from 'styled-components'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

export const StyledDrawerTitle = styled.View`
  height: 80;
  align-items: center;
  background-color: ${props => props.theme.colors.superBlack};
  justify-content: flex-start;
  flex-direction: row;
`
export const StyledDrawerIconTitle = styled(Icon)`
  margin-left: 15;
  color: ${props => props.theme.colors.gold};
  font-size: 36;
`
export const StyledDrawerIconSearch = styled(Icon)`
  left: 70;
  color: #9b9b9b;
  font-size: 32;
`
export const StyledTitleHeaderText = styled.Text`
  font-size: 16;
  padding-left: 10;
  color: ${props => props.theme.colors.gold};
`
