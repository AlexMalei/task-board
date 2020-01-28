import React from 'react'
import { connect } from 'react-redux'
import { Text, View, ScrollView } from 'react-native'
import { Avatar } from 'react-native-elements'

import { theme } from '@/theme'

import {
  StyledBackgroundContainer,
  StyledBeforeText,
  StyledContainer,
  StyledDay,
  StyledRow,
  StyledTextDay,
  StyledAvatar,
  StyleTextActivity,
  StyleTextData,
} from './component'

const Activity = ({ projectId }) => {
  return (
    <StyledBackgroundContainer>
      <ScrollView>
        <StyledContainer>
          <StyledDay>
            <StyledTextDay>TODAY</StyledTextDay>
            <StyledBeforeText />
            <StyledRow>
              <StyledAvatar>
                <Avatar
                  rounded
                  size={theme.avatarSizes.small}
                  overlayContainerStyle={{ backgroundColor: '#CEF9C6' }}
                  icon={{ name: 'check', color: '#1D201C', type: 'font-awesome', size: 20 }}
                  onPress={() => console.log('Works!')}
                  activeOpacity={0.7}
                />
                <StyleTextActivity>
                  Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users Darika
                  Samak mark as done Listing on Product Hunt so that we can reach as many potential usersDarika Samak
                  mark as done Listing on Product Hunt so that
                </StyleTextActivity>
                <StyleTextData>19:40 PM</StyleTextData>
              </StyledAvatar>
            </StyledRow>
            <StyledRow>
              <StyledAvatar>
                <Avatar
                  rounded
                  size={theme.avatarSizes.small}
                  overlayContainerStyle={{ backgroundColor: '#CEF9C6' }}
                  icon={{ name: 'comment', color: '#1D201C', type: 'font-awesome', size: 20 }}
                  onPress={() => console.log('Works!')}
                  activeOpacity={0.7}
                  // containerStyle={{ flex: 1, marginTop: 0 }}
                />
                <StyleTextActivity>
                  Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users Darika
                </StyleTextActivity>
                <StyleTextData>10:20 PM</StyleTextData>
              </StyledAvatar>
            </StyledRow>
            <StyledRow>
              <StyledAvatar>
                <Avatar
                  rounded
                  size={theme.avatarSizes.small}
                  overlayContainerStyle={{ backgroundColor: '#CEF9C6' }}
                  icon={{ name: 'comment', color: '#1D201C', type: 'font-awesome', size: 20 }}
                  onPress={() => console.log('Works!')}
                  activeOpacity={0.7}
                  // containerStyle={{ flex: 1, marginTop: 0 }}
                />
                <StyleTextActivity>
                  Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users Darika
                  Samak mark as done Listing on Product Hunt so that we can reach as many potential usersDarika Samak
                  mark as done Listing on Product Hunt so that we can reach as many potential users Darika Samak mark as
                  done Listing on Product Hunt so that we can reach as many potential users Darika Samak mark as done
                  Listing on Product Hunt so that we can reach as many potential users
                </StyleTextActivity>
                <StyleTextData>19:00 PM</StyleTextData>
              </StyledAvatar>
            </StyledRow>
          </StyledDay>

          <StyledDay>
            <StyledTextDay>YESTERDAY</StyledTextDay>
            <StyledBeforeText />
            <StyledRow>
              <StyledAvatar>
                <Avatar
                  rounded
                  size={theme.avatarSizes.small}
                  overlayContainerStyle={{ backgroundColor: '#CEF9C6' }}
                  icon={{ name: 'check', color: '#1D201C', type: 'font-awesome', size: 20 }}
                  onPress={() => console.log('Works!')}
                  activeOpacity={0.7}
                />
                <StyleTextActivity>
                  Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users Darika
                  Samak mark as done Listing on Product Hunt so that we can reach as many potential usersDarika Samak
                  mark as done Listing on Product Hunt so that
                </StyleTextActivity>
                <StyleTextData>17:45 PM</StyleTextData>
              </StyledAvatar>
            </StyledRow>
            <StyledRow>
              <StyledAvatar>
                <Avatar
                  rounded
                  size={theme.avatarSizes.small}
                  overlayContainerStyle={{ backgroundColor: '#CEF9C6' }}
                  icon={{ name: 'comment', color: '#1D201C', type: 'font-awesome', size: 20 }}
                  onPress={() => console.log('Works!')}
                  activeOpacity={0.7}
                  // containerStyle={{ flex: 1, marginTop: 0 }}
                />
                <StyleTextActivity>
                  Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users Darika
                </StyleTextActivity>
                <StyleTextData>9:40 PM</StyleTextData>
              </StyledAvatar>
            </StyledRow>
            <StyledRow>
              <StyledAvatar>
                <Avatar
                  rounded
                  size={theme.avatarSizes.small}
                  overlayContainerStyle={{ backgroundColor: '#CEF9C6' }}
                  icon={{ name: 'comment', color: '#1D201C', type: 'font-awesome', size: 20 }}
                  onPress={() => console.log('Works!')}
                  activeOpacity={0.7}
                  // containerStyle={{ flex: 1, marginTop: 0 }}
                />
                <StyleTextActivity>
                  Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users Darika
                  Samak mark as done Listing on Product Hunt so that we can reach as many potential usersDarika Samak
                  mark as done Listing on Product Hunt so that we can reach as many potential users Darika Samak mark as
                  done Listing on Product Hunt so that we can reach as many potential users Darika Samak mark as done
                  Listing on Product Hunt so that we can reach as many potential users
                </StyleTextActivity>
                <StyleTextData>19:40 PM</StyleTextData>
              </StyledAvatar>
            </StyledRow>
          </StyledDay>
        </StyledContainer>
      </ScrollView>
    </StyledBackgroundContainer>
  )
}

const mapStateToProps = ({ project: { projectId } }) => ({
  projectId,
})

export default connect(mapStateToProps, null)(Activity)
