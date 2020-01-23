import moment from 'moment'

export const parseDate = dateString => {
  return moment(dateString).calendar(null, {
    sameDay: '[today at] HH:mm',
    nextDay: '[tomorrow at] HH:mm',
    nextWeek: 'dddd [at] HH:mm',
    lastDay: '[yesterday at] HH:mm',
    lastWeek: '[last] dddd [at] HH:mm ',
    sameElse: 'DD.MM.YYYY [at] HH:mm',
  })
}
