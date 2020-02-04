import styled from 'styled-components'

export const StyledDay = styled.View`
  flex: 1;
  margin-bottom: 20;
`
export const StyledTextDay = styled.Text`
  padding: 10px 0px;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.white};
`
export const StyledBeforeText = styled.Text`
  position: absolute;
  left: 23px;
  width: 2px;
  height: 100%;
  background: ${({ theme }) => theme.colors.lightGrey};
  z-index: -1;
`
