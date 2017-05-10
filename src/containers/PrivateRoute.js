/**
 * Created by Mihail on 5/7/2017.
 */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../actions/authActions'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
export default PrivateRoute