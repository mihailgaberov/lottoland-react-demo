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

export function logOut () {
  return {
    type: types.AUTH_LOGOUT
  }
}


export function getToken (state) {
  const newState = Map(state).getIn(['auth', 'access_token'], null)
  console.log('>>> new state: ', newState)
  return newState
}

export function isAuthenticated (state) {
  return getToken(state) !== null
}
