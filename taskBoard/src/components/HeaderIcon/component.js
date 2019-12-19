import styled from 'styled-components'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

export const StyledIcon = styled(Icon)`
  margin-left: 10;
  margin-right: 10;

  font-size: 30;
  color: ${props => props.theme.colors.black};
`
