/**
 * Created by mgab on 05/05/2017.
 */

import Button from './styled-components/Button'
import StyledDialog from './styled-components/StyledDialog'
import React, { Component } from 'react'
import propTypes from 'prop-types'

class Dialog extends Component {
  render() {
    return (
      <StyledDialog>
        <div>
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
      </StyledDialog>
    )
  }
}

Dialog.propTypes = {
  header: propTypes.string.isRequired,
  confirmLabel: propTypes.string,
  onAction: propTypes.func,
  type: propTypes.string,
  className: propTypes.string
}

Dialog.defaultProps = {
  confirmLabel: 'ok',
  onAction: () => {
  }
}

export default Dialog