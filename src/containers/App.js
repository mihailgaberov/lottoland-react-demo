/**
 * Created by Mihail on 4/23/2017.
 */
import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import Header from '../common/Header'
import Nav from '../common/Nav'

class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Header />
        <Nav />
      </div>
    )
  }
}

export default App