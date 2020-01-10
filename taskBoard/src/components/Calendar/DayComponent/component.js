import styled from 'styled-components'

export const StyledDayContainer = styled.TouchableOpacity`
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 ${({ cellMargin }) => cellMargin}px;
  width: ${({ cellSize }) => cellSize}px;
  height: ${({ cellSize }) => cellSize}px;

  background-color: ${({ theme, isWeekend }) => (isWeekend ? theme.colors.dawnPink : theme.colors.cararra)};
  border-radius: 8px;
`

export const StyledDayText = styled.Text`
  text-align: center;
  padding-left: 7px;

  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.codGray};
  opacity: 0.5;
`

export const StyledCountTasks = styled.Text`
  margin-top: 2px;
  padding-left: 7px;

  font-size: ${({ theme: { fontSizes } }) => fontSizes[13]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
`
