/**
 * Created by Mihail on 4/23/2017.
 */
import React from 'react'
import { Link } from 'react-router-dom'

import Wrapper from '../common/styled-components/Wrapper'
import Button from '../common/styled-components/Button'
import Title from '../common/styled-components/Title'
import Highlighted from '../common/styled-components/HighlightedArea'
import ContactsElement from '../common/styled-components/ContactsElement'


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
        <span>Front End Developer at <a href="https://www.lottoland.com" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Lottoland-logo.svg/2000px-Lottoland-logo.svg.png" alt="Lottoland Logo" width="125" height="39"/></a></span>
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