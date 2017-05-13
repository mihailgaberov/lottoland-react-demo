/**
 * Created by Mihail on 5/7/2017.
 */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route {...rest} render={props => (auth ? (<Component {...props}/>) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
export default PrivateRoute
