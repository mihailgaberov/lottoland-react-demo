/**
 * Created by mgab on 05/05/2017.
 */
'use strict'

import { Map } from 'immutable'

import * as types from '../constants/actionTypes'

export default function (state = Map(), action) {
  if (action.type === types.SHOW_MODAL) {
    return state.set(action.payload, true)
  }
  if (action.type === types.HIDE_MODAL) {
    return state.set(action.payload, false)
  }
  return state
}