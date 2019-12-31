import { Dimensions } from 'react-native'

export const DAY_CELL_MARGIN = 2
export const COUNT_CELL_VERTICAL_SIDES = 2

//@todo: make calendar padding according to this value
export const CALENDAR_PADDING = 15
export const COUNT_DAYS_IN_ROW = 7
export const AMOUNT_MONTH_TO_SCROLL = 12

export const DAY_CELL_SIZE =
  Math.round((Dimensions.get('window').width - CALENDAR_PADDING * 2) / COUNT_DAYS_IN_ROW) -
  COUNT_CELL_VERTICAL_SIDES * DAY_CELL_MARGIN
