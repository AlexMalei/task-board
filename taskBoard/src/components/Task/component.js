import styled from 'styled-components'
import Avatar from '@/fields/Avatar'

export const StyledContainer = styled.View`
  flex: 1;

  padding: 20px 25px;
  margin: 10px 0;

  background-color: ${({ theme }) => theme.colors.cararra};
  border-radius: 8;
`

export const StyledCheckBoxContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const StyledTaskDescription = styled.View`
  flex: 7;
  flex-direction: column;
`

export const StyledContent = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes[1]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const StyledFooter = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`

export const StyledUserAvatar = styled(Avatar)``

export const StyledTypeLabel = styled.Text`
  margin-left: 5px;
  padding: 3px 6px;

  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  border-radius: 11px;

  text-transform: uppercase;
`
