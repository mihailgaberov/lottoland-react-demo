/**
 * Created by mgab on 05/05/2017.
 */

import { put, call } from 'redux-saga/effects'
import { login } from '../API/api'
import * as types from '../constants/actionTypes'

export function* authSaga({ payload }) {
  try {
    const authInfo = yield call(login, payload)
    yield put({ type: types.AUTH_RESPONSE, authInfo })
  } catch (error) {
    yield put({ type: types.AUTH_ERROR, error })
  }
}