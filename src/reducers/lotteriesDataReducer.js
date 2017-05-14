/**
 * Created by mgab on 14/05/2017.
 */
import * as types from '../constants/actionTypes'
import { Map, fromJS } from 'immutable'

export default function (state = Map(), action) {
  if (action.type === types.DATA_RESPONSE) {
    return state.mergeDeep(fromJS(action))
  }
  if (action.type === types.DATA_ERROR) {
    return state.set('error', action.payload)
  }
  return state
}