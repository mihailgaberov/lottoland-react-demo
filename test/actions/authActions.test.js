/**
 * Created by mgab on 17/05/2017.
 */
import * as actions from '../../src/actions/authActions'
import * as types from '../../src/constants/actionTypes'
import { Map, fromJS } from 'immutable'

describe('Auth Actions', () => {
  it('should create an action to log in the user', () => {
    const username = 'Test'
    const password = 'asdasd'

    const expectedAction = {
      type: types.AUTH_REQUEST,
      payload: { username, password }
    }
    expect(actions.logIn(username, password)).toEqual(expectedAction)
  })

  it('should create an action to log out the user', () => {
    const expectedAction = {
      type: types.AUTH_LOGOUT
    }
    expect(actions.logOut()).toEqual(expectedAction)
  })

  it('should provide method for checking if errors', () => {
    const state = Map()
    expect(actions.isError(state)).toEqual(false)
    const resp = {
      'auth': {
        'authInfo': {
          "error": "invalid_grant",
          "error_description": "LOGIN_FAILED"
        }
      }
    }
    const state1 = state.mergeDeep(fromJS(resp))
    expect(actions.isError(state1)).toEqual(true)
  })

  it('should provide method for checking if authenticated', () => {
    const state = Map()
    expect(actions.isAuthenticated(state)).toEqual(false)
    const resp = {
      'auth': {
        'authInfo': {
          'access_token': ''
        }
      }
    }
    const state1 = state.mergeDeep(fromJS(resp))
    expect(actions.isAuthenticated(state1)).toEqual(true)
  })
})