/**
 * Created by mgab on 03/05/2017.
 */
import { Component } from 'react'
import { connect } from 'react-redux'

import { isAuthenticated } from '../actions/authActions'

class EnsureLoggedInContainer extends Component {

  constructor() {
    super()

    this.state = {
      isLoggedIn: false,
      currentURL: '/'
    }
  }

  componentDidMount() {
    this.state.setState({
      isLoggedIn: isAuthenticated(this.state)
    })

    const { dispatch, currentURL } = this.props

    console.log('>>> dispatch: ', dispatch)
    console.log('>>> currentURL: ', currentURL)

    if (!isAuthenticated(this.state)) {
      history.replace("/login")
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return this.props.children
    } else {
      return null
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.loggedIn,
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)