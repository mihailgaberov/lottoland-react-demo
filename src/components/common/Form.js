/**
 * Created by mgab on 05/05/2017.
 */

import React, { Component } from 'react'

class Form extends Component {
  constructor (props) {
    super(props)
    this.getFields = this.getFields.bind(this)
  }

  getData () {
    let data = {}
    this.getFields().forEach((field) => {
      data[field.id] = this.refs[field.id].getValue()
    })
    return data
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
            <input type={field.type} ref={field.id} placeholder={field.label} />
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