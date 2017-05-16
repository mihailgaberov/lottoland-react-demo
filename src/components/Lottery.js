/**
 * Created by mgab on 14/05/2017.
 */
import React,{ Component } from 'react'
import Jackpots from './Jackpots'
import StyledLottery from '../components/common/styled-components/Lottery'

export default class Lottery extends Component {
  render() {

    const imgPath = require(`${'../../logos/' + this.props.name}.png`)

    return (
      <StyledLottery>
        <li><img src={imgPath} alt={this.props.name} /></li>
        <li>Name: {this.props.name}</li>
        <li>Jackpots: <Jackpots data={this.props.jackpots} /></li>
        <li>Drawing date: {new Date(this.props.drawingDate).toDateString()}</li>
      </StyledLottery>
    )
  }
}