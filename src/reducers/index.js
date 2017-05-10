/**
 * Created by mgab on 05/05/2017.
 */
import { combineReducers } from 'redux'

import auth from './authReducer'

const rootReducer = combineReducers({
  auth
})

export default rootReducer