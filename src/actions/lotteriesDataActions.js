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
  // return getToken(state) !== null
  console.log('from actions getDAta: ', state)
}