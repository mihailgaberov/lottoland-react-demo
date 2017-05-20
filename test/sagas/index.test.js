/**
 * Created by mgab on 20/05/2017.
 */
import expect from 'expect';
import { fork } from 'redux-saga/effects';
import startForeman from '../../src/sagas';
import watchAuthentication from '../../src/sagas/watcher';
import watchLotteriesData from '../../src/sagas/watcher';


describe('Test startForeman saga', () => {
  it('should yield array watchers saga', () => {
    expect(startForeman().next().value).toEqual(fork(watchAuthentication));
    expect(startForeman().next().value).toEqual(fork(watchLotteriesData));
  });
});