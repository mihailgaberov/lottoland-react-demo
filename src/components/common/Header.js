/**
 * Created by Mihail on 4/23/2017.
 */
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import propTypes from 'prop-types'

import PrivateRoute from '../../containers/PrivateRoute'
import LoginDialog from '../../containers/LoginDialog'
import HomePage from '../pages/HomePage'
import LotteryPage from '../pages/LotteryPage'

class Header extends Component {

  showLoginDialog() {
    this.props.showLogin()
  }

  closeLoginDialog(e) {
    if (e.target.className.includes('Dialog DialogModal') || e.key === 'Escape') {
      this.props.hideLogin()
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
        <PrivateRoute path='/lotteries' component={LotteryPage}/>

        {this.props.showLoginModal && !this.props.isAuthenticated ?
          <LoginDialog closeDialog={this.closeLoginDialog.bind(this)}/> : null}
      </div>
    )
  }
}

Header.propTypes = {
  showLoginModal: propTypes.bool,
  isAuthenticated: propTypes.bool,
  showLogin: propTypes.func,
  hideLogin: propTypes.func
}


export default Header