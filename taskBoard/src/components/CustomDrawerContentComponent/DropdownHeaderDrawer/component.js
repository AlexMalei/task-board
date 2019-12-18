import styled from 'styled-components'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

export const StyledDrawerIcon = styled(Icon)`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes[6]};
`
