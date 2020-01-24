import React from 'react'

import { DescriptionContent, DescriptionContainer, SectionLabelWithMargin } from './component'

const Description = ({ content }) => {
  return (
    <DescriptionContainer>
      <SectionLabelWithMargin>Description</SectionLabelWithMargin>
      <DescriptionContent>{content}</DescriptionContent>
    </DescriptionContainer>
  )
}

export default Description
