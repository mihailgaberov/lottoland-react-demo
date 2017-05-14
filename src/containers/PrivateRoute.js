/**
 * Created by Mihail on 5/7/2017.
 */
import React, { Component } from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { isAuthenticated } from '../actions/authActions'


class PrivateRoute extends Component {

  render() {
    let { component: Component, isLogged, ...rest } = this.props

    return (
      <Route {...rest} render={props => (isLogged ? (<Component {...props} />) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: isAuthenticated(state),
  }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))