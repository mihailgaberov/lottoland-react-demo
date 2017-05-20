/**
 * Created by mgab on 19/05/2017.
 */
import reducer from '../../src/reducers/lotteriesDataReducer'
import * as types from '../../src/constants/actionTypes'
import { Map, fromJS } from 'immutable'

describe('Lotteries Data reducer', () => {
  const initialState = {
      'asdasd': 'asdasd'
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, [])).toEqual(fromJS({}))
  })

  it('should handle DATA_REQUEST', () => {
    const testAction = { type: types.DATA_REQUEST }
    expect(reducer([], testAction)).toEqual([])
  })

  it('should handle DATA_RESPONSE', () => {
    const testAction = { type: types.DATA_RESPONSE }

    let expected = Map()
    expected = expected.set('asdasd', 'asdasd')
    expected = expected.set('type', types.DATA_RESPONSE)

    expect(reducer(initialState, testAction)).toEqual(expected)
  })
})