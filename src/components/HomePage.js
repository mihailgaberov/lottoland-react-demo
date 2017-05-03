/**
 * Created by Mihail on 4/23/2017.
 */
import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

import Button from '../common/elements/Button'
import Highlighted from '../common/elements/HighlightedArea'
import ContactsElement from '../common/elements/ContactsElement'

// Create a <Title> react component that renders an <h1> which is centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 2.5em;
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: palevioletred;
`

// Create a <Wrapper> react component that renders a <section> with some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
  
  @media only screen and (min-width: 680px) {
    padding: 4em;    
  }
`

const HomePage = () => (
  <Wrapper>
    <Title>Using React, Redux and Saga with Lottoland APIs</Title>
    <div>
      <Link to="lotteries">
        <Button primary>View Lotteries</Button>
      </Link>
    </div>
    <Highlighted>
      <ContactsElement position="left" width="352">
        <span>Mihail Gaberov</span>
        <span>Front End Developer at <img src="https://www.lottoland.com/skins/lottoland/images/logo/ll-logo-green-14c4a0ddaf8c5179.svg" alt="Lottoland Logo" width="125" height="39"/></span>
      </ContactsElement>
      <ContactsElement position="left" width="200">
        <div><em className="fa fa-lg fa-home" aria-hidden="true"/><a href="https://mihail-gaberov.eu">mihail-gaberov.eu</a></div>
        <div><em className="fa fa-lg fa-twitter-square" aria-hidden="true"/><a href="https://twitter.com/mihailgaberov">/mihailgaberov</a></div>
        <div><em className="fa fa-lg fa-github-square" aria-hidden="true"/><a href="https://github.com/mihailgaberov">/mihailgaberov</a></div>
      </ContactsElement>
    </Highlighted>
  </Wrapper>
)

export default HomePage