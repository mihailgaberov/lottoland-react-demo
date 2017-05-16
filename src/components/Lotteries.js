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
        const jackpotsData = lottery.getIn(['jackpots'], [])
        const jackpotsToDisplay = []

        jackpotsData.map((el) => {
          return jackpotsToDisplay.push(el.getIn(['jackpot'], 0))
        })

        return lotteriesToDisplay.push(<Lottery name={lottery.getIn(['id'], '')}
                                jackpots={jackpotsToDisplay}
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