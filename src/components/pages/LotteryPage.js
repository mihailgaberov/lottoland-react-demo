/**
 * Created by mgab on 04/05/2017.
 */
import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Button from '../common/styled-components/Button'
import { logOut } from '../../actions/authActions'
import Lotteries from '../Lotteries'

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
    this.props.logout()
  }

  render() {
    return (
      <Wrapper>
        <Lotteries />
        <div>
          <Button primary onClick={this.logout}>Logout</Button>
        </div>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logOut())
  }
}

export default connect(null, mapDispatchToProps)(LotteryPage)