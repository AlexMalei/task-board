import styled, { css } from 'styled-components'
import { Container, Header } from 'native-base'
// import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

export const StyledDrawerContainer = styled(Container)`
  flex: 1;
  background-color: ${props => props.theme.colors.black};
  color: red;
`
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
export const StyledDrawerContentMargin = styled.View`
  margin-left: 20;
  margin-right: 20;
`
export const StyledDrawerProfileText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes[2]};
`
export const StyledDrawerIcon = styled(Icon)`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes[5]};
`

export const StyledDataTasks = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding-top: 20;
  padding-bottom: 20;
`
export const StyledDataTasksText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 20;
  /* font-weight: bold; */
`
const textStyleMixin = css`
  font-size: 14;
  padding-top: 10;
`
export const StyledTitleProject = styled.Text`
  ${textStyleMixin}
  color: ${props => props.theme.colors.gray};
`
export const StyledTitleAddProject = styled.Text`
  font-size: 14;
  padding-top: 10;
  padding-bottom: 10;
  color: ${props => props.theme.colors.gold};
`
export const StyledColorGray = styled.Text``

export const StyledDrawerTextGray = styled.Text`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes[1]};
`
export const StyledDrawerProjectContainer = styled.View`
  padding: 4px;
  left: ${props => props.theme.space[1]};
  flex-direction: row;
  align-items: center;
`
export const StyledDrawerProjectText = styled.Text`
  padding-left: ${props => props.theme.space[5]};
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes[1]};
`
