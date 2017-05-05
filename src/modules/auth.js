/**
 * Created by mgab on 05/05/2017.
 */
import { Map, fromJS } from 'immutable'

// Actions
export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_ERROR = 'AUTH_ERROR'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

// Default Reducer
export default function reducer (state = Map(), action) {
  if (action.type === AUTH_SUCCESS) {
    return state.mergeDeep(fromJS(action.payload))
  }
  if (action.type === AUTH_LOGOUT) {
    return Map()
  }
  if (action.type === AUTH_ERROR) {
    return state.set('error', action.payload)
  }
  return state
}

export function logIn (username, password) {
  return {
    type: AUTH_REQUEST,
    payload: { username, password }
  }
}

export function logOut () {
  return {
    type: AUTH_LOGOUT
  }
}

export function authSuccess (token, cookie, user) {
  return {
    type: AUTH_SUCCESS,
    payload: { token, cookie, user }
  }
}

export function setUserInfo (token, user) {
  return authSuccess(token, null, user)
}

export function authError (message) {
  return {
    type: AUTH_ERROR,
    error: true,
    payload: message
  }
}