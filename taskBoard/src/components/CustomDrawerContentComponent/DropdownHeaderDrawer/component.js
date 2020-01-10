import styled from 'styled-components'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

export const StyledDrawerIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes[6]};
`
