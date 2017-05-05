/**
 * Created by mgab on 05/05/2017.
 */
'use strict'

import Button from './common/elements/Button'
import React, { Component, PropTypes } from 'react'

class Dialog extends Component {

  componentWillUnmount() {
    document.body.classList.remove('DialogModalOpen')
  }

  componentDidMount() {
    if (this.props.modal) {
      document.body.classList.add('DialogModalOpen')
    }
  }

  render() {
    return (
      <div className={this.props.modal ? 'Dialog DialogModal' : 'Dialog'}>
        <div className={this.props.modal ? 'DialogModal__wrap' : null}>
          <div className='Dialog__header'>{this.props.header}</div>
          <div className='Dialog__body'>{this.props.children}</div>
          <div className='Dialog__footer'>
            <Button onClick={this.props.onAction.bind(this)}
                    className={this.props.className}
                    type={this.props.type}>
              {this.props.confirmLabel}
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

Dialog.propTypes = {
  header: PropTypes.string.isRequired,
  confirmLabel: PropTypes.string,
  modal: PropTypes.bool,
  onAction: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string
}

Dialog.defaultProps = {
  confirmLabel: 'ok',
  modal: false,
  onAction: () => {
  }
}

export default Dialog