/**
 * Created by Mihail on 5/7/2017.
 */
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { isAuthenticated } from '../actions/authActions'


class PrivateRoute extends Component {

  render() {
    let { component: Component, isLogged, ...rest } = this.props

    console.log(isLogged)

    return (
      <Route {...rest} render={props => (isLogged ? (<Component {...props}/>) : (
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

export default connect(mapStateToProps)(PrivateRoute)