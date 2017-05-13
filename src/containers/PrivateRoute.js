/**
 * Created by Mihail on 5/7/2017.
 */
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
 import { isAuthenticated } from '../actions/authActions'


export default class PrivateRoute extends Component {

  constructor(props) {
    super(props)

    console.log('>>> props: ', props)
  }

  render() {
    let { component: Component, ...rest } = this.props

    return (
      <Route {...rest} render={props => (isAuthenticated(this.state) ? (<Component {...props}/>) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )}/>
    )
  }
}