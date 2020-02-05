import styled from 'styled-components'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

export const ParticipantContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-bottom: 10px;

  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
`

export const ParticipantName = styled.Text`
  padding: 10px;
`

export const IconContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 0 0 0 10px;
`

export const StyledIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.gray};
`
