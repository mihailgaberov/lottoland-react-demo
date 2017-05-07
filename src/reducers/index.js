/**
 * Created by mgab on 05/05/2017.
 */
import { combineReducers } from 'redux'

import auth from './authReducer'
import modal from './modalReducer'

const rootReducer = combineReducers({
  auth,
  modal
})

export default rootReducer