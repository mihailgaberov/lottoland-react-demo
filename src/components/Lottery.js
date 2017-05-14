/**
 * Created by mgab on 14/05/2017.
 */
import React,{ Component } from 'react'

export default class Lottery extends Component {
  render() {
    return (
      <ul>
        <li>Name: {this.props.name}</li>
        <li>Jackpot: {this.props.jackpot}</li>
        <li>Drawing date: {this.props.drawingDate}</li>
      </ul>
    )
  }
}