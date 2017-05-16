/**
 * Created by mgab on 14/05/2017.
 */
import React,{ Component } from 'react'
import Jackpots from './Jackpots'

export default class Lottery extends Component {
  render() {

    const imgPath = require(`${'../../logos/' + this.props.name}.png`)

    return (
      <ul>
        <li><img src={imgPath} alt={this.props.name} /></li>
        <li>Name: {this.props.name}</li>
        <li>Jackpots: <Jackpots data={this.props.jackpots} /></li>
        <li>Drawing date: {this.props.drawingDate}</li>
      </ul>
    )
  }
}