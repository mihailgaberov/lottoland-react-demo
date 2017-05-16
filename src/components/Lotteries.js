/**
 * Created by mgab on 14/05/2017.
 */
import React,{ Component } from 'react'
import Title from './common/styled-components/Title'

import Lottery from './Lottery'


export default class Lotteries extends Component {

  render() {
    const lotteriesToDisplay = []

    if (this.props.lotteriesData) {
      this.props.lotteriesData.map((lottery) => {
        return lotteriesToDisplay.push(<Lottery name={lottery.getIn(['id'], '')}
                                jackpot={lottery.getIn(['jackpots'], [])[0]}
                                drawingDate={lottery.getIn(['drawingDate'], '')}
                                key={Math.random()} />)
      })
    }

    return (
      <div>
        <Title>Lotteries</Title>
        <div>
          {lotteriesToDisplay.length > 0 ? lotteriesToDisplay : 'No data.'}
        </div>
      </div>
    )
  }
}