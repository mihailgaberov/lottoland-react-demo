/**
 * Created by mgab on 05/05/2017.
 */
'use strict'

import { put, call } from 'redux-saga/effects';
import { login } from '../Api/api';
import * as types from '../constants/actionTypes';

export function* authSaga({ payload }) {
  try {
    const isLoginSuccessful = yield call(login, payload);

    yield [
      put({ type: types.AUTH_SUCCESS, isLoginSuccessful }),
    ];
  } catch (error) {
    yield put({ type: types.AUTH_ERROR, error });
  }
}