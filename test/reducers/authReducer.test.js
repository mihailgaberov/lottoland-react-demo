/**
 * Created by mgab on 18/05/2017.
 */
import reducer from '../../src/reducers/authReducer'
import * as types from '../../src/constants/actionTypes'
import { Map, fromJS } from 'immutable'

describe('Authentication reducer', () => {
  const initialState = {
    payload: {
      username: 'mihail.gaberov@lottoland.com',
      password: 'testtest'
    }
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, [])).toEqual(fromJS({}))
  })

  it('should return successful login if credentials are correct', () => {
    const testAction = { type: types.AUTH_RESPONSE, payload: { 'access_token': 'asdsada' } }
    expect(reducer(initialState, testAction)).toEqual(fromJS({
      "payload": { "access_token": "asdsada" },
      "type": "AUTH_RESPONSE"
    }))
  })

  it('should handle logout', () => {
    const testAction = { type: types.AUTH_LOGOUT }
    expect(reducer(initialState, testAction)).toEqual(Map())
  })

  it('should handle the case when an error occurred', () => {
    const testAction = { type: types.AUTH_ERROR }

    let state = Map()
    state = state.set('payload', {
      username: 'mihail.gaberov@lottoland.com',
        password: 'testtest'
    })
    state = state.set('error', undefined)

    expect(reducer(initialState, testAction)).toEqual(state)
  })
})