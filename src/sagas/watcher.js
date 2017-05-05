/**
 * Created by mgab on 05/05/2017.
 */
'use strict'

import { takeLatest } from 'redux-saga/effects';
import { authSaga } from './authSaga';
import * as types from '../constants/actionTypes';

// Watches for AUTH_REQUEST action type asynchronously
export default function* watchAuthentication() {
  yield takeLatest(types.AUTH_REQUEST, authSaga);
}