/**
 * Created by Mihail on 5/7/2017.
 */
import React, { Component } from 'react'
import propTypes from 'prop-types'

class FormInput extends Component {

  constructor (props) {
    super(props)

    this.state = {
      valid: true
    }
    this.validate = this.validate.bind(this)
  }

  getValue () {
    let field = this.refs.input
    if ('input' in field) {
      field = field.input
    }

    return 'value' in field
      ? field.value
      : field.getValue()
  }

  validate () {
    if (!this.props.validate) return
    this.setState({
      valid: this.props.validate(this.getValue())
    })
  }

  isValid () {
    return this.state.valid
  }

  render () {
    const common = {
      id: this.props.id,
      ref: 'input',
      onChange: this.validate
    }

    const classes = []

    if (this.state.valid === true) {
      classes.push('valid')
    } else if (this.state.valid === false) {
      classes.push('invalid')
    }

    switch (this.props.type) {
      case 'textarea':
        return <textarea className={classes.join(' ')} {...common} />
      case 'email':
      case 'text':
      case 'password':
      default:
        return <input className={classes.join(' ')} {...common} type={this.props.type} placeholder={this.props.label} />
    }
  }
}

FormInput.propTypes = {
  type: propTypes.oneOf(['masked', 'text', 'input', 'email', 'password']),
  id: propTypes.string,
  label: propTypes.string,
  validate: propTypes.func,
  mask: propTypes.string
}

export default FormInput
