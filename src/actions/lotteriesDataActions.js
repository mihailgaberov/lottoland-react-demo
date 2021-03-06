/**
 * Created by mgab on 14/05/2017.
 */
import * as types from '../constants/actionTypes'
import { Map } from 'immutable'

export function getData () {
  return {
    type: types.DATA_REQUEST
  }
}

export function getLotteriesData(state) {
  const immutableState = Map(state)
  return immutableState.getIn(['lotteriesData', 'data'], [])
}