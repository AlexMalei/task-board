import React, { Fragment } from 'react'
import { ProgressCircle, StackedAreaChart } from 'react-native-svg-charts'
import { StyledTestText } from './component'

export const ProgressCircleComponent = ({ color, progress }) => {
  return (
    <Fragment>
      <ProgressCircle
        style={{ height: 150 }}
        progress={progress / 100}
        progressColor={color}
        strokeWidth={7}
        startAngle={0}
        endAngle={360}
        animate={true}
        animationDuration={1300}
      />
      <StyledTestText color={color}>{progress}%</StyledTestText>
    </Fragment>
  )
}
