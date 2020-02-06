import React, { Fragment } from 'react'

import { StyledDay, StyledBeforeText, StyledTextDay } from './component'
import Notice from '@/components/Activity/Notice'

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
