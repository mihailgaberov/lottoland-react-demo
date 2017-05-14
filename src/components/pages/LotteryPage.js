/**
 * Created by mgab on 04/05/2017.
 */
import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../common/styled-components/Button'

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

  constructor() {
    super()

    this.logout = this.logout.bind(this)
  }

  logout() {
    console.log('Logout!')
  }

  render() {
    return (
      <Wrapper>
        <Title>Lotteries</Title>
        <p>
          Welcome!
        </p>
        <div>
          <Link to="/">
            <Button primary onClick={this.logout}>Logout</Button>
          </Link>
        </div>
      </Wrapper>
    )
  }
}

export default LotteryPage