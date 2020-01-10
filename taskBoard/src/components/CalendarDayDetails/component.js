import styled from 'styled-components'
import Button from '@/fields/Button'

export const StyledDayDetailsContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  padding: 20px;
  min-height: 100px;
`

export const StyledHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`

export const StyledDate = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
`

export const StyledTasks = styled.ScrollView`
  flex: 1;
`
