import styled from 'styled-components'
import Input from '@/fields/Input'

export const CommentsSectionContainer = styled.View`
  padding: 30px 0;
`

export const CommentAddContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const SectionLabel = styled.Text`
  margin-bottom: 20px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]};

  text-transform: uppercase;
`
