/**
 * Created by mgab on 14/05/2017.
 */
import React,{ Component } from 'react'
import Title from './common/styled-components/Title'
import { Map } from 'immutable'
import Lottery from './Lottery'
import StyledLotteries from '../components/common/styled-components/Lotteries'


export default class Lotteries extends Component {

  render() {
    const lotteriesToDisplay = []

    if (this.props.lotteriesData) {
      this.props.lotteriesData.map((lottery) => {
        const jackpotsData = Map(lottery).getIn(['jackpots'], [])
        const jackpotsToDisplay = []

        jackpotsData.map((el) => {
          return jackpotsToDisplay.push(Map(el).getIn(['jackpot'], 0))
        })

        return lotteriesToDisplay.push(<Lottery name={Map(lottery).getIn(['lotteryId'], '')}
                                jackpots={jackpotsToDisplay}
                                drawingDate={Map(lottery).getIn(['drawingDate'], '')}
                                key={Math.random()} />)
      })
    }

    return (
      <div>
        <Title>Lotteries</Title>
        <StyledLotteries>
          {lotteriesToDisplay.length > 0 ? lotteriesToDisplay : 'No data.'}
        </StyledLotteries>
      </div>
    )
  }
}