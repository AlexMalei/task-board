import React, { Fragment, useState } from 'react'
import { ScrollView } from 'react-native'
import { useQuery } from '@apollo/react-hooks'

import { GET_DATA_CREATED_TASKS } from '@/queries'
import { parseActivityOnlyDay } from '@/helpers'
import Spinner from '@/components/Spinner'
import NoticeDay from '@/components/Activity/NoticeDay'
import { StyledContainer } from './component'

const ProjectActivity = ({ projectId }) => {
  const { loading, error, data } = useQuery(GET_DATA_CREATED_TASKS, {
    variables: { id: projectId },
  })
  const dataActivity = data?.tasks

  let dateDay = {}
  dataActivity
    ? dataActivity.forEach(element => {
        const created_at = parseActivityOnlyDay(element.created_at)
        dateDay[created_at] ? dateDay[created_at].push(element) : (dateDay[created_at] = new Array(element))
      })
    : {}

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <ScrollView>
          <StyledContainer>
            <NoticeDay notice={dateDay} />
          </StyledContainer>
        </ScrollView>
      )}
    </Fragment>
  )
}

export default ProjectActivity
