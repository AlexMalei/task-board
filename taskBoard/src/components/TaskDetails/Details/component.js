import styled from 'styled-components'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

export const DetailsSectionContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  min-height: 60px;
`

export const DetailsItemContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding-bottom: 20px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.lightGrey};
`

export const ItemLabel = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]};

  text-transform: uppercase;
`

export const ParticipantsContentContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-right: 15px;
`

export const ParticipantAddIconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.avatarSizes.xsmall};
  height: ${({ theme }) => theme.avatarSizes.xsmall};

  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.avatarSizes.xsmall / 2};
`

export const ParticipantAddIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.fontSizes[2]};

  color: ${({ theme }) => theme.colors.gray};
`

export const DeadlineContent = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`
