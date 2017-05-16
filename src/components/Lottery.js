/**
 * Created by mgab on 14/05/2017.
 */
import React,{ Component } from 'react'
import Jackpots from './Jackpots'

export default class Lottery extends Component {
  render() {
    return (
      <ul>
        <li>Name: {this.props.name}</li>
        <li>Jackpots: <Jackpots data={this.props.jackpots} /></li>
        <li>Drawing date: {this.props.drawingDate}</li>
      </ul>
    )
  }
}