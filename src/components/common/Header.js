/**
 * Created by Mihail on 4/23/2017.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import LoginDialog from '../../containers/LoginDialog'

class Header extends Component {
  constructor(props) {
    super(props)
  }

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
          <a onClick={this.showLoginDialog.bind(this)}>Sign in</a>

        </nav>
        {this.props.showLoginModal && !this.props.isAuthenticated ?
          <LoginDialog closeDialog={this.closeLoginDialog.bind(this)}/> : null}
      </div>
    )
  }
}
export default Header