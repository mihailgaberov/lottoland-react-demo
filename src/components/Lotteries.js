/**
 * Created by mgab on 14/05/2017.
 */
import React,{ Component } from 'react'
import Title from './common/styled-components/Title'

import Lottery from './Lottery'


export default class Lotteries extends Component {

  render() {

    const lotteries = []

    this.props.lotteriesData.forEach((entry) => {
      lotteries.push(<Lottery name={entry.id}
                              jackpot={entry.jackpots.jackpot}
                              drawingDate={entry.drawingDate}
                              key={entry.id} />)
    })

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