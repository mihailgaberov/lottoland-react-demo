/**
 * Created by mgab on 03/05/2017.
 */
import { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { login } from '../API/api'

class EnsureLoggedInContainer extends Component {
  componentDidMount() {
    let isLoggedIn = false

    const { dispatch, currentURL } = this.props

    console.log('>>> dispatch: ', dispatch)
    console.log('>>> currentURL: ', currentURL)

    if (!isLoggedIn) {
      //dispatch(setRedirectUrl(currentURL))
      BrowserRouter.replace("/login")
    }
  }

  render() {
    // if (isLoggedIn) {
    if (true) {
      return this.props.children
    } else {
      return null
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.loggedIn,
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)