/**
 * Created by mgab on 05/05/2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logIn, isAuthenticated } from '../actions/authActions'
import Dialog from '../components/common/Dialog'
import Form from '../components/common/Form'
import ErrorMsg from '../components/common/styled-components/ErrorMsg'

class LoginDialog extends Component {

  constructor() {
    super()
    this.state = {
      isLoggged: false
    }
  }

  submitLogin() {
    this.props.submitLogin(
      this.refs['loginForm'].refs['email'].getValue(),
      this.refs['loginForm'].refs['password'].getValue()
    )
  }


  render() {
    return (
      <div>
        {this.isLoggged || <ErrorMsg>Wrong email or password. Please try again.</ErrorMsg>}
        <Dialog
          modal
          header='Login'
          confirmLabel='Login'
          onAction={this.submitLogin.bind(this)}
          type='rounded'
          className='loginBtn'
        >
          {this.props.error && <div className='error'>{this.props.error}</div>}
          <Form onSubmit={this.submitLogin.bind(this)} ref='loginForm' key='loginForm' fieldsIds={['email', 'password']}/>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggged: isAuthenticated(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitLogin: (email, password) => dispatch(logIn(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog)