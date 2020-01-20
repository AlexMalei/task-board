import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'

import { StyledDateContainer, StyledDate, StyledDateTextContainer, StyledDateTitle } from './component'

const DatePicker = ({ mode, title, date, handleDateChange }) => {
  const [visible, setVisible] = useState(false)

  const onDateChange = ({ type }, date) => {
    setVisible(false)

    if (type === 'set') {
      handleDateChange(date)
    }
  }

  return (
    <StyledDateContainer>
      <StyledDateTitle>{title}</StyledDateTitle>
      <StyledDateTextContainer onPress={() => setVisible(true)}>
        <StyledDate>{moment(date).format('DD-MM-YYYY')}</StyledDate>
      </StyledDateTextContainer>
      {visible && <DateTimePicker value={date} mode={mode} is24Hour={true} display="default" onChange={onDateChange} />}
    </StyledDateContainer>
  )
}

DatePicker.defaultProps = {
  mode: 'date',
}

export default DatePicker
