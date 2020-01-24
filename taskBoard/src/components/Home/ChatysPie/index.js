import React, { Fragment } from 'react'
import { StyleSheet } from 'react-native'
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory-native'

export class LoaderPie extends React.Component {
  constructor() {
    super()
    this.state = {
      percent: 0,
      data: this.getData(0),
    }
  }

  componentDidMount() {
    let percent = 0
    this.setStateInterval = window.setInterval(() => {
      percent += 1 * 100
      percent = percent > this.props.workingPai ? this.props.workingPai : percent
      this.setState({
        percent,
        data: this.getData(percent),
      })
    }, 1600)
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval)
  }

  getData(percent) {
    return [
      { x: 1, y: percent },
      { x: 2, y: 100 - percent },
    ]
  }

  render() {
    const { color } = this.props

    return (
      <Fragment>
        <VictoryPie
          standalone={true}
          colorScale={[color, '#eaeaea']}
          animate={{ duration: 700 }}
          width={300}
          height={300}
          data={this.state.data}
          innerRadius={85}
          cornerRadius={1}
          labelComponent={
            <VictoryAnimation duration={800} data={this.state}>
              {newProps => {
                return (
                  <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={150}
                    y={150}
                    text={`${Math.round(newProps.percent)}%`}
                    style={{ fontSize: 45 }}
                  />
                )
              }}
            </VictoryAnimation>
          }
        />
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
    left: 100,
  },
})
