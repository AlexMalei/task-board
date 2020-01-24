import styled from 'styled-components'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

export const StyledInputContainer = styled.View`
  flex: 1;
  justify-content: center;
  width: 100%;
`

export const InputTitle = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`

export const TextInput = styled.TextInput`
  padding-left: 20px;

  border-radius: 8px;
  background-color: ${props => props.theme.colors.darkGrey};
`

export const SubmitIconContainer = styled.TouchableOpacity`
  position: absolute;
  right: 0;

  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`

export const SubmitIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.fontSizes[4]};

  color: ${({ theme }) => theme.colors.gray};
`
