import styled from 'styled-components'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

export const StyledIcon = styled(Icon)`
  margin-left: 10;
  margin-right: 10;

  font-size: ${({ theme }) => theme.fontSizes[6]};
  color: ${({ theme }) => theme.colors.black};
`
