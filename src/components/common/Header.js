/**
 * Created by Mihail on 4/23/2017.
 */
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import PrivateRoute from '../../containers/PrivateRoute'
import LoginDialog from '../../containers/LoginDialog'
import HomePage from '../pages/HomePage'
import LotteryPage from '../pages/LotteryPage'
import { isAuthenticated } from '../../actions/authActions'

class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLogged: false
    }
  }

  render() {
    return (
      <div className="text-center">
        <nav className="navbar navbar-default">
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/lotteries">Lotteries</Link>
        </nav>

        <Route exact path='/' component={HomePage}/>
        <Route path='/login' component={LoginDialog}/>
        <PrivateRoute path='/lotteries' auth={isAuthenticated(this.state)} component={LotteryPage}/>
      </div>
    )
  }
}

export default Header