/**
 * Created by Mihail on 4/23/2017.
 */
import React, { Component } from 'react'

import Header from '../components/common/Header'

class App extends Component {

  render() {
    return (
      <div className="container-fluid text-center">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default App