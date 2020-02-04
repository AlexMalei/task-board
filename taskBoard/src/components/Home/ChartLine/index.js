import React from 'react'
import { VictoryLine } from 'victory-native'
import { theme } from '@/theme'

const DURATION_LINE = 2000
const DURATION_LOAD_LINE = 1000

export const ChartLine = () => {
  return (
    <VictoryLine
      width={350}
      interpolation="bundle"
      data={[2, 3, 3, 3, 7, 7.5, 7, 5, 4, 2, 5, 3, 2, 1]}
      style={{ data: { stroke: theme.colors.organicGreen, strokeWidth: 10 } }}
      animate={{
        duration: DURATION_LINE,
        onLoad: { duration: DURATION_LOAD_LINE },
      }}
    />
  )
}
