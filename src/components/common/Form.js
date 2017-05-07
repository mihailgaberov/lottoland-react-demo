/**
 * Created by mgab on 05/05/2017.
 */
import React, { Component } from 'react'

import FormInput from '../common/FormInput'

class Form extends Component {
  constructor (props) {
    super(props)
    this.getFields = this.getFields.bind(this)
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

  isValid () {
    return this.getFields().filter((field) => {
        return !this.refs[field.id].isValid()
      }).length === 0
  }

  getFields () {
    let fields = this.props.fields || [
        {
          id: 'email',
          label: 'Email',
          type: 'email'
        },
        {
          id: 'password',
          label: 'Password',
          type: 'password'
        }
      ]

    return fields.filter((field) => this.props.fieldsIds.includes(field.id))
  }

  _submit (e) {
    if (this.props.onSubmit) {
      this.props.onSubmit()
    }
    e.preventDefault()
  }

  render () {
    return (
      <form className='Form' onSubmit={this._submit.bind(this)}>{this.getFields().map((field) => {
        return (
          <div className='FormRow' id={`Form-Row-${field.id}`} key={field.id}>
            <FormInput {...field} ref={field.id} />
          </div>
        )
      }, this)}
        <input type='submit' style={{
          position: 'absolute',
          left: -99999
        }} />
      </form>
    )
  }
}

export default Form