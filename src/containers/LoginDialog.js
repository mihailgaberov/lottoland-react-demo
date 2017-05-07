/**
 * Created by mgab on 05/05/2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logIn } from '../actions/authActions'
import Dialog from '../components/common/Dialog'
import Form from '../components/common/Form'

class LoginDialog extends Component {

  constructor() {
    super()
    this.state = {}
  }

  submitLogin() {
    this.props.submitLogin(
      this.refs['loginForm'].refs['email'].getValue(),
      this.refs['loginForm'].refs['password'].getValue()
    )
  }


  render() {
    return (
      <div className='LoginDialog' onClick={this.props.closeDialog}
           onKeyPress={this.props.closeDialog}>
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

export default connect(
  (state, ownProps) => ({}),
  (dispatch) => ({
    submitLogin: (email, password) => dispatch(logIn(email, password)),
  })
)(LoginDialog)