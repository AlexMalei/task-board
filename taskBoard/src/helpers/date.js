import moment from 'moment'

export const parseDateTimeFromNow = dateString => {
  return moment(dateString).calendar(null, {
    sameDay: '[Today at] HH:mm',
    nextDay: '[Tomorrow at] HH:mm',
    nextWeek: 'dddd [at] HH:mm',
    lastDay: '[Yesterday at] HH:mm',
    lastWeek: '[Last] dddd [at] HH:mm ',
    sameElse: 'DD.MM.YYYY [at] HH:mm',
  })
}

export const parseActivityOnlyTime = dateString => {
  return moment(dateString).calendar(null, {
    sameDay: 'HH:mm A',
    nextDay: 'HH:mm A',
    nextWeek: 'HH:mm A',
    lastDay: 'HH:mm A',
    lastWeek: 'HH:mm A',
    sameElse: 'HH:mm A',
  })
}

export const parseActivityOnlyDay = dateString => {
  return moment(dateString).calendar(null, {
    sameDay: '[TODAY]',
    nextDay: 'DD.MM.YYYY',
    nextWeek: 'DD.MM.YYYY',
    lastDay: '[YESTERDAY]',
    lastWeek: 'DD.MM.YYYY',
    sameElse: 'DD.MM.YYYY',
  })
}
