/**
 * Created by mgab on 05/05/2017.
 */
import * as types from '../constants/actionTypes'

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