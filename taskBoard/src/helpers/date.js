import moment from 'moment'

export const parseDate = dateString => {
  return moment(dateString).calendar(null, {
    sameDay: '[Today at] HH:mm',
    nextDay: '[Tomorrow at] HH:mm',
    nextWeek: 'dddd [at] HH:mm',
    lastDay: '[Yesterday at] HH:mm',
    lastWeek: '[Last] dddd [at] HH:mm ',
    sameElse: 'DD.MM.YYYY [at] HH:mm',
  })
}
