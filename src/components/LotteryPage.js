/**
 * Created by mgab on 04/05/2017.
 */

import React from 'react'
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

const LotteryPage = () => (
    <Wrapper>
        <Title>Using React, Redux and Saga with Lottoland APIs</Title>
    </Wrapper>
)

export default LotteryPage