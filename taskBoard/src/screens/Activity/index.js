import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'
import { useQuery } from '@apollo/react-hooks'

import NoticeDay from '@/screens/Activity/NoticeDay'
import { StyledContainer } from '@/screens/Activity/component'
import { GET_DATA_CREATED_TASKS } from '@/queries'
import { parseActivityOnlyDay } from '@/helpers'
import Spinner from '@/components/Spinner'

const Activity = ({ projectId }) => {
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
    <ScrollView>
      {loading ? (
        <Spinner />
      ) : (
        <ScrollView>
          <StyledContainer>
            <NoticeDay notice={dateDay} />
          </StyledContainer>
        </ScrollView>
      )}
    </ScrollView>
  )
}

const mapStateToProps = ({ project: { projectId } }) => ({
  projectId,
})

export default connect(mapStateToProps, null)(Activity)
