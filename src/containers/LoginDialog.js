/**
 * Created by mgab on 05/05/2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

import { logIn,
         isAuthenticated,
         isError
} from '../actions/authActions'
import Dialog from '../components/common/Dialog'
import Form from '../components/common/Form'
import ErrorMsg from '../components/common/styled-components/ErrorMsg'

class LoginDialog extends Component {

  submitLogin() {
    this.props.submitLogin(
      this.refs['loginForm'].refs['email'].getValue(),
      this.refs['loginForm'].refs['password'].getValue()
    )
  }


  render() {
    return (
      <div>
        {(!this.props.isLoggged && this.props.isError) && <ErrorMsg>Wrong email or password. Please try again.</ErrorMsg>}
        <Dialog
          modal
          header='Login'
          confirmLabel='Login'
          onAction={this.submitLogin.bind(this)}
          type='rounded'
          className='loginBtn'
        >
          <Form onSubmit={this.submitLogin.bind(this)} ref='loginForm' key='loginForm' fieldsIds={['email', 'password']}/>
        </Dialog>
      </div>
    )
  }
}

LoginDialog.propTypes = {
  isLoggged: propTypes.bool.isRequired,
  isError: propTypes.bool
}

const mapStateToProps = (state) => {
  return {
    isLoggged: isAuthenticated(state),
    isError: isError(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitLogin: (email, password) => dispatch(logIn(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog)