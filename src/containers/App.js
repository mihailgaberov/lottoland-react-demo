/**
 * Created by Mihail on 4/23/2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../components/common/Header'
import Nav from '../components/common/Nav'

class App extends Component {

  componentDidUpdate(prevProps) {
    // const { dispatch, redirectUrl } = this.props
    const { redirectUrl } = this.props
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn

    if (isLoggingIn) {
      // dispatch(navigateTo(redirectUrl))
      history.push(redirectUrl)
    } else if (isLoggingOut) {
      history.push('/')
      //dispatch(navigateTo('/'))
    }
  }

  render() {
    return (
      <div className="container-fluid text-center">
        <Header />
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.loggedIn,
    redirectUrl: state.redirectUrl
  }
}

export default connect(mapStateToProps)(App)