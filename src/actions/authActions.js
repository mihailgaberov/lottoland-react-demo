/**
 * Created by mgab on 05/05/2017.
 */
import * as types from '../constants/actionTypes'
import { Map } from 'immutable'

export function logIn (username, password) {
  return {
    type: types.AUTH_REQUEST,
    payload: { username, password }
  }
}

export function isError(state) {
  const immutableState = Map(state)
  return immutableState.getIn(['auth', 'authInfo', 'error'], null) !== null
}

export function getToken (state) {
  const immutableState = Map(state)
  return immutableState.getIn(['auth', 'authInfo', 'access_token'], null)
}

export function isAuthenticated (state) {
  console.log('>>> isAuth: ', getToken(state) !== null)
  return getToken(state) !== null
}