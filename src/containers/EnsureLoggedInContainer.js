/**
 * Created by mgab on 03/05/2017.
 */
import { Component } from 'react'
import { connect } from 'react-redux'

class EnsureLoggedInContainer extends Component {
  componentDidMount() {
    let isLoggedIn = false

    const { dispatch, currentURL } = this.props

    console.log('>>> dispatch: ', dispatch)
    console.log('>>> currentURL: ', currentURL)

    if (!isLoggedIn) {
      history.replace("/login")
    }
  }

  render() {
    // if (isLoggedIn) {
    if (true) {
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