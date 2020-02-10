import styled from 'styled-components'

export const ParticipantsContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-right: 10px;
`

export const Text = styled.Text`
  justify-content: center;
  align-items: center;
  padding: 0 10px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: ${({ theme }) => theme.fontSizes[2]};
`

export const AvatarsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
