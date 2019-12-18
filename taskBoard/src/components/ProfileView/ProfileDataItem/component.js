import styled from 'styled-components'
import { StyleSheet } from 'react-native'

export const StyledBorderContainer = styled.View`
  flex: 1;
  padding-left: 24;
`

export const StyledDataContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding-top: 16;
  padding-bottom: 16;
  padding-right: 24;

  border-bottom-color: grey;
  border-bottom-width: ${StyleSheet.hairlineWidth};
`

export const StyledContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

export const StyledContentContainer = styled.View`
  flex: 5;
  justify-content: center;
`

export const StyledTitle = styled.Text`
  align-items: center;

  font-weight: bold;
  color: black;
`

export const StyledSubtitle = styled.Text`
  margin-top: 4;

  color: blue;
  font-size: 15;
`
