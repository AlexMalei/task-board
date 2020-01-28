import styled from 'styled-components'
import { Avatar as ReactAvatar } from 'react-native-elements'
import { theme } from '@/theme'

export const StyledBackgroundContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.pampas};
`
export const StyledContainer = styled.TouchableOpacity`
  z-index: 10;

  flex: 1;
  flex-direction: column;
  align-self: stretch;
  margin: 20px;
  padding: 20px;
  min-height: 100px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  border-color: ${({ isActive }) => (isActive ? 'red' : 'white')};
  border-width: ${({ isActive }) => (isActive ? 2 : 0)};
`

export const StyledDay = styled.View`
  flex: 1;
  /* border-color: red; */
  /* border-width: 1; */
  margin-bottom: 20;
`

export const StyledRow = styled.View`
  flex: 1;
  /* border-color: yellow; */
  /* border-width: 1; */
  padding: 10px 0px;
`
export const StyledTextDay = styled.Text`
  margin-bottom: 15px;
  font-size: 16;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: gray;
  background: white;
  z-index: 10;
`
export const StyledBeforeText = styled.Text`
  width: 2px;
  height: 100%;
  background: #ececec;
  position: absolute;
  left: 22px;
  top: 0;
  z-index: 0;
`
export const StyledAvatar = styled.View`
  /* flex: 1; */
  flex-direction: row;
  align-content: space-between;
`
export const StyleTextActivity = styled.Text`
  flex: 7;
  padding-left: 5px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
`
export const StyleTextData = styled.Text`
  flex: 2;
  font-size: 14;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`
