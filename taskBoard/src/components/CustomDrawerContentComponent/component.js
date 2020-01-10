import styled, { css } from 'styled-components'
import { Container, Header } from 'native-base'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

export const StyledDrawerContainer = styled(Container)`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.red};
`
export const StyledDrawerHeader = styled(Header)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  height: 80;

  background-color: ${({ theme }) => theme.colors.codGray};
`
export const StyledDrawerImageProfile = styled.Image`
  justify-content: center;
  height: 48;
  width: 48;

  border-radius: 75;
`
export const StyledDrawerContentMargin = styled.View`
  margin-left: 20;
  margin-right: 20;
`
export const StyledDrawerProfileText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.white};
`
export const StyledDrawerIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.fontSizes[6]};
  color: ${({ theme }) => theme.colors.gray};
`

export const StyledDataTasks = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding-top: 20;
  padding-bottom: 20;
`
export const StyledDataTasksText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  color: ${({ theme }) => theme.colors.white};
`
const textStyleMixin = css`
  font-size: ${({ theme }) => theme.fontSizes[1]};
  padding-top: 10;
`
export const StyledTitleProject = styled.Text`
  ${textStyleMixin}
  color: ${({ theme }) => theme.colors.gray};
`
export const StyledTitleAddProject = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes[1]};
  padding-top: 10;
  padding-bottom: 10;

  color: ${({ theme }) => theme.colors.gold};
`
export const StyledColorGray = styled.Text``

export const StyledDrawerTextGray = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes[1]};
`
export const StyledDrawerProjectContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 4px;

  left: ${({ theme }) => theme.space[1]};
`
export const StyledDrawerProjectText = styled.Text`
  padding-left: ${({ theme }) => theme.space[5]};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  color: ${({ theme }) => theme.colors.gray};
`
