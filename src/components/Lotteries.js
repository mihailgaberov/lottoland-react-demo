/**
 * Created by mgab on 14/05/2017.
 */
import React,{ Component } from 'react'
import Title from './common/styled-components/Title'

import Lottery from './Lottery'


export default class Lotteries extends Component {

  render() {
    const lotteries = []

    if (this.props.lotteriesData) {
      this.props.lotteriesData.map((lottery) => {
        lotteries.push(<Lottery name={lottery.getIn(['id'], '')}
                                jackpot={lottery.getIn(['jackpots'], [])[0]}
                                drawingDate={lottery.getIn(['drawingDate'], '')}
                                key={Math.random()} />)
      })
    }

  /*this.props.lotteriesData.forEach((entry) => {
    lotteries.push(<Lottery name={entry.id}
                            jackpot={entry.jackpots[0].jackpot}
                            drawingDate={entry.drawingDate}
                            key={entry.id} />)
  })*/


    return (
      <div>
        <Title>Lotteries</Title>
        <div>
          {lotteries}
        </div>
      </div>
    )
  }
}