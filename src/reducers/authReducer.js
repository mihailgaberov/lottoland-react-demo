/**
 * Created by mgab on 05/05/2017.
 */

import * as types from '../constants/actionTypes'
import { Map, fromJS } from 'immutable'

export default function (state = Map(), action) {
  if (action.type === types.AUTH_SUCCESS) {
    console.log(state.mergeDeep('>>> ', action.isLoginSuccessful))
    return state.mergeDeep(fromJS(action.isLoginSuccessful))
  }
  if (action.type === types.AUTH_LOGOUT) {
    return Map()
  }
  if (action.type === types.AUTH_ERROR) {
    return state.set('error', action.payload)
  }
  return state
}