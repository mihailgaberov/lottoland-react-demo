/**
 * Created by mgab on 04/05/2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Wrapper from '../common/styled-components/Wrapper'
import Button from '../common/styled-components/Button'
import { logOut } from '../../actions/authActions'
import { getLotteriesData, getData } from '../../actions/lotteriesDataActions'
import Lotteries from '../Lotteries'

class LotteryPage extends Component {

  constructor() {
    super()
    this.logout = this.logout.bind(this)
    this.getData = this.getData.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    this.props.getData()
  }

  logout() {
    this.props.logout()
  }

  render() {
    return (
      <Wrapper>
        <Lotteries lotteriesData={this.props.lotteries} />
        <div>
          <Button primary onClick={this.logout}>Logout</Button>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lotteries: getLotteriesData(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logOut()),
    getData: () => dispatch(getData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LotteryPage)