import React, { Fragment } from 'react'

import Notice from '@/screens/Activity/Notice'
import { StyledDay, StyledBeforeText, StyledTextDay } from './component'

const NoticeDay = ({ notice }) => {
  const keysNotice = Object.keys(notice)

  return (
    <Fragment>
      {keysNotice.map(key => (
        <StyledDay>
          <StyledTextDay>{key}</StyledTextDay>
          {notice[key].map(notice => (
            <Notice notice={notice} />
          ))}
          <StyledBeforeText />
        </StyledDay>
      ))}
    </Fragment>
  )
}

export default NoticeDay
