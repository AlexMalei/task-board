import React from 'react'
import { VictoryLine } from 'victory-native'

export const ChartLine = () => {
  return (
    <VictoryLine
      width={350}
      interpolation="bundle"
      data={[2, 3, 3, 3, 7, 7.5, 7, 5, 4, 2, 5, 3, 2, 1]}
      style={{ data: { stroke: '#7EB973', strokeWidth: 10 } }}
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 },
      }}
    />
  )
}
