/**
 * Created by mgab on 04/05/2017.
 */
import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2.5em;
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
  
  @media only screen and (min-width: 680px) {
    padding: 4em;
  }
`
class LotteryPage extends Component {

  render() {
    console.log('LotteryPage render...')

    return (
      <Wrapper>
        <Title>Lotteries</Title>
        <p>
          Welcome!
          <button onClick={() => history.push('/')}>Sign out</button>
        </p>
      </Wrapper>
    )
  }
}

export default LotteryPage