/**
 * Created by mgab on 17/05/2017.
 */
import * as actions from '../../src/actions/authActions'
import * as types from '../../src/constants/actionTypes'

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
})