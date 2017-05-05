/**
 * Created by mgab on 05/05/2017.
 */
'use strict'

import { fork } from 'redux-saga/effects';
import watchAuthentication from './watcher';

export default function* startForman() {
  yield fork(watchAuthentication);
}