import styled from 'styled-components'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

export const StyledDrawerTitle = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  height: 80px;

  background-color: ${({ theme }) => theme.colors.black};
`
export const StyledDrawerIconTitle = styled(Icon)`
  margin-left: 15px;
  font-size: ${({ theme }) => theme.fontSizes[6]};
  color: ${({ theme }) => theme.colors.gold};
`
export const StyledDrawerIconSearch = styled(Icon)`
  left: 70;
  font-size: ${({ theme }) => theme.fontSizes[6]};
  color: ${({ theme }) => theme.colors.gray};
`
export const StyledTitleHeaderText = styled.Text`
  padding-left: 10;
  font-size: ${({ theme }) => theme.fontSizes[2]};

  color: ${({ theme }) => theme.colors.gold};
`
