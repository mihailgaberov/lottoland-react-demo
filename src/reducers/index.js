/**
 * Created by mgab on 05/05/2017.
 */
import { combineReducers } from 'redux'

import login from './authReducer'
import modal from './modalReducer'

const rootReducer = combineReducers({
  login,
  modal
})

export default rootReducer