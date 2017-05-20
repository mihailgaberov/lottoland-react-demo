/**
 * Created by mgab on 14/05/2017.
 */

import { put, call } from 'redux-saga/effects'
import { getData } from '../API/api'
import * as types from '../constants/actionTypes'

export default function* lotteriesSaga() {
  try {
    const data = yield call(getData)
    yield put({ type: types.DATA_RESPONSE, data })
  } catch (error) {
    yield put({ type: types.DATA_ERROR, error })
  }
}