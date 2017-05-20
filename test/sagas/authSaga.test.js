/**
 * Created by mgab on 20/05/2017.
 */
import expect from 'expect';
import * as types from '../../src/constants/actionTypes'
import { put, call } from 'redux-saga/effects';
import authSaga from '../../src/sagas/authSaga';
import { login } from '../../src/API/api';


describe('Test for authSaga', () => {
  const payload = {
    'username': 'mihail.gaberov@gmail.com',
    'password': 'testtest'
  }
  const gen = authSaga({ payload })

  it('should call Login API', () => {
    expect(gen.next(payload).value).toEqual(call(login, payload))
  })


  it('should yield authentication response object', () => {
    const isLogged = {}
    expect(gen.next(isLogged).value).toBeA('object')
  })

  it('should dispatch failure effect', () => {
    const error = 'error';
    expect(gen.throw(error).value).toEqual(put({ type: types.AUTH_ERROR, error }));
  })
})