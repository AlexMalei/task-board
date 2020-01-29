import styled from 'styled-components'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons'

export const HeaderContainer = styled.View`
  flex: 1;
  margin-bottom: 20px;
`

export const TaskCreationContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

export const Author = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`

export const Date = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[2]};

  text-transform: lowercase;
`

export const TaskName = styled.Text`
  flex: 1;
  margin-bottom: 10px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
`

export const TopRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const IconsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width: 100px;
`

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 0 0 0 20px;

  background-color: ${({ theme }) => theme.colors.darkGrey};
`

export const StyledCheckIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.fontSizes[2]};

  color: ${({ theme }) => theme.colors.gray};
`

export const StyledDetailsIcon = styled(MaterialIcon)`
  font-size: ${({ theme }) => theme.fontSizes[2]};

  color: ${({ theme }) => theme.colors.gray};
`
