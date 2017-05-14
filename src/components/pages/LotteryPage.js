/**
 * Created by mgab on 04/05/2017.
 */
import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Button from '../common/styled-components/Button'
import { logOut } from '../../actions/authActions'
import { getLotteriesData, getData } from '../../actions/lotteriesDataActions'
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
    this.getData = this.getData.bind(this)
  }

  componenDidMount() {
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
    // lotteries : [
    //   {
    //     "id": "austriaLotto_2627",
    //     "lotteryId": "austriaLotto",
    //     "drawingDate": "2017-05-14T16:30:00.000+0000",
    //     "closingDate": "2017-05-14T16:00:00.000+0000",
    //     "state": "IN_PLAY",
    //     "doubleJackpotAllowed": true,
    //     "jackpots": [
    //       {
    //         "lotteryId": "austriaLotto",
    //         "jackpot": 10000,
    //         "marketingJackpot": 0
    //       }
    //     ],
    //     "drawingType": "SU"
    //   },
    //
    //   {
    //     "id": "cash4Life_305",
    //     "lotteryId": "cash4Life",
    //     "drawingDate": "2017-05-16T01:00:00.000+0000",
    //     "closingDate": "2017-05-16T00:00:00.000+0000",
    //     "state": "IN_PLAY",
    //     "doubleJackpotAllowed": true,
    //     "jackpots": [
    //       {
    //         "lotteryId": "cash4Life",
    //         "jackpot": 222220,
    //         "marketingJackpot": 0
    //       }
    //     ],
    //     "drawingType": "TU"
    //   }
    // ]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logOut()),
    getData: () => dispatch(getData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LotteryPage)