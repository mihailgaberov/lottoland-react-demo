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
      <div>
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

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitLogin: (email, password) => dispatch(logIn(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog)