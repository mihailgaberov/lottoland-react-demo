/**
 * Created by mgab on 05/05/2017.
 */

import { fork } from 'redux-saga/effects'
import watchAuthentication, { watchLotteriesData } from './watcher'

export default function* startForman() {
  yield fork(watchAuthentication)
  yield fork(watchLotteriesData)
}