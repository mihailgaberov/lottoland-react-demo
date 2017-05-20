/**
 * Created by mgab on 20/05/2017.
 */
import expect from 'expect';
import * as types from '../../src/constants/actionTypes'
import { put, call } from 'redux-saga/effects';
import lotteriesSaga from '../../src/sagas/lotteriesSaga';
import { getData } from '../../src/API/api';


describe('Test for lotteriesSaga', () => {
  const gen = lotteriesSaga()

  it('should call Lottery Drawings API', () => {
    expect(gen.next().value).toEqual(call(getData))
  })


  it('should yield data response object', () => {
    const data = {}
    expect(gen.next(data).value).toEqual(put({ type: types.DATA_RESPONSE, data}))
  })

  it('should dispatch failure effect', () => {
    const error = 'error';
    expect(gen.throw(error).value).toEqual(put({ type: types.DATA_ERROR, error }));
  })
})