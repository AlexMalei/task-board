import styled from 'styled-components'

export const StyledDay = styled.View`
  flex: 1;
  margin-bottom: 20;
`
export const StyledTextDay = styled.Text`
  padding: 10px 0px;
  font-size: 16;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: gray;
  background: white;
`
export const StyledBeforeText = styled.Text`
  position: absolute;
  left: 23px;
  width: 2px;
  height: 100%;
  background: #ececec;
  z-index: -1;
`
