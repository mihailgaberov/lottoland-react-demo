/**
 * Created by mgab on 05/05/2017.
 */
import { takeLatest } from 'redux-saga/effects';
import { authSaga } from './authSaga';
import { lotteriesSaga } from './lotteriesSaga';
import * as types from '../constants/actionTypes';

// Watches for AUTH_REQUEST action type asynchronously
export default function* watchAuthentication() {
  yield takeLatest(types.AUTH_REQUEST, authSaga);
}

// Watches for DATA_REQUEST action type asynchronously
export function* watchLotteriesData() {
  yield takeLatest(types.DATA_REQUEST, lotteriesSaga);
}