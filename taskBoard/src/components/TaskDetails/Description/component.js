import styled from 'styled-components'

export const TaskDescriptionContainer = styled.View`
  padding: 30px 0;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.lightGrey};
`

export const SectionTextContent = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`

export const SectionLabelWithMargin = styled.Text`
  margin-bottom: 20px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]};

  text-transform: uppercase;
`
