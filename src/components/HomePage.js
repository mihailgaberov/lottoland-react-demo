/**
 * Created by Mihail on 4/23/2017.
 */
import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

import Button from '../common/elements/Button'

// Create a <Title> react component that renders an <h1> which is centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 2.5em;
  font-family: "Avenir Next", sans-serif;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const HomePage = () => (
  <Wrapper>
    <Title>Using React, Redux and Saga with Lottoland APIs</Title>
    <div>
      <Link to="lotteries">
        <Button primary>View Lotteries</Button>
      </Link>
    </div>
  </Wrapper>
)

export default HomePage