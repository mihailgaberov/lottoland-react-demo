/**
 * Created by Mihail on 4/23/2017.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './containers/App'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()


ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
), document.getElementById('root'))
