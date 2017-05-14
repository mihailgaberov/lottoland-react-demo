/**
 * Created by mgab on 05/05/2017.
 */
import { combineReducers } from 'redux'

import auth from './authReducer'
import lotteriesDataReducer from './lotteriesDataReducer'

const rootReducer = combineReducers({
  auth,
  lotteriesDataReducer
})

export default rootReducer