/**
 * Created by mgab on 05/05/2017.
 */
import { combineReducers } from 'redux'

import auth from './authReducer'
import lotteriesData from './lotteriesDataReducer'

const rootReducer = combineReducers({
  auth,
  lotteriesData
})

export default rootReducer