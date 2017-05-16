/**
 * Created by mgab on 16/05/2017.
 */
import React, { Component } from 'react'

export default class Jackpots extends Component {
  render() {
    const jackpots = []

    this.props.data.forEach((jackpot) => {
      jackpots.push(jackpot + '\n')
    })

    return (
      <div>
        {jackpots}
      </div>
    )
  }
}