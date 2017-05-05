/**
 * Created by mgab on 05/05/2017.
 */

import { Map, fromJS } from 'immutable'
import * as types from '../constants/actionTypes'


export default function (state = Map(), action) {
  if (action.type === types.AUTH_SUCCESS) {
    return state.mergeDeep(fromJS(action.payload))
  }
  if (action.type === types.AUTH_LOGOUT) {
    return Map()
  }
  if (action.type === types.AUTH_ERROR) {
    return state.set('error', action.payload)
  }
  return state
}