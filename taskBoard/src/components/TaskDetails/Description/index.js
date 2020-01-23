import React from 'react'

import { SectionTextContent, TaskDescriptionContainer, SectionLabelWithMargin } from './component'

const Description = ({ content }) => {
  return (
    <TaskDescriptionContainer>
      <SectionLabelWithMargin>Description</SectionLabelWithMargin>
      <SectionTextContent>{content}</SectionTextContent>
    </TaskDescriptionContainer>
  )
}

export default Description
