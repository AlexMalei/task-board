import React, { Fragment, useState, useEffect } from 'react'
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory-native'

export const ChartPie = ({ workingPai, color }) => {
  const getData = percent => {
    return [
      { x: 1, y: percent },
      { x: 2, y: 100 - percent },
    ]
  }

  const [percent, setPercent] = useState(0)
  const [data, setData] = useState(getData(0))

  useEffect(() => {
    setStateInterval()
  }, [workingPai])

  const setStateInterval = () => {
    let percent = 0
    setTimeout(() => {
      percent += 1 * 100
      percent = percent > workingPai ? workingPai : percent
      setPercent(percent)
      setData(getData(percent))
    }, 2000)
  }

  return (
    <Fragment>
      <VictoryPie
        standalone={true}
        colorScale={[color, '#eaeaea']}
        animate={{ duration: 700 }}
        width={300}
        height={300}
        data={data}
        innerRadius={85}
        cornerRadius={1}
        labelComponent={
          <VictoryAnimation duration={800} data={{ percent }}>
            {newProps => {
              return (
                <VictoryLabel
                  textAnchor="middle"
                  verticalAnchor="middle"
                  x={150}
                  y={150}
                  text={`${Math.round(newProps.percent)}%`}
                  style={{ fontSize: 45, fill: color }}
                />
              )
            }}
          </VictoryAnimation>
        }
      />
    </Fragment>
  )
}
