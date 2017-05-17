/**
 * Created by mgab on 04/05/2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

import Wrapper from '../common/styled-components/Wrapper'
import Button from '../common/styled-components/Button'
import { logOut } from '../../actions/authActions'
import { getLotteriesData, getData } from '../../actions/lotteriesDataActions'
import Lotteries from '../Lotteries'

class LotteryPage extends Component {

  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(getData())
  }

  logout() {
    this.props.dispatch(logOut())
  }

  render() {
    const { lotteries } = this.props
    return (
      <Wrapper>
        <Lotteries lotteriesData={lotteries} />
        <div>
          <Button primary onClick={this.logout}>Logout</Button>
        </div>
      </Wrapper>
    )
  }
}

LotteryPage.propTypes = {
  lotteries: propTypes.array,
  dispatch: propTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  lotteries: getLotteriesData(state)
});

export default connect(mapStateToProps)(LotteryPage)