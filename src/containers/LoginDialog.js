/**
 * Created by mgab on 05/05/2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logIn } from '../actions/loginActions'
import Dialog from '../components/Dialog'
import Form from '../components/Form'

class LoginDialog extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentWillMount() {
    document.addEventListener('keyup', this.props.closeDialog, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.props.closeDialog, false)
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
        </Dialog>}
      </div>
    )
  }
}

LoginDialog.propTypes = {
  closeDialog: React.PropTypes.func
}

export default connect(
  (dispatch) => ({
    submitLogin: (email, password) => dispatch(logIn(email, password))
  })
)(LoginDialog)