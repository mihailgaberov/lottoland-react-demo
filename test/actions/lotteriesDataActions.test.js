/**
 * Created by mgab on 17/05/2017.
 */
import * as actions from '../../src/actions/lotteriesDataActions'
import * as types from '../../src/constants/actionTypes'
import { Map, fromJS } from 'immutable'

describe('Lotteries Data Actions', () => {
  it('should create an action to get the data', () => {
    const expectedAction = {
      type: types.DATA_REQUEST,
    }
    expect(actions.getData()).toEqual(expectedAction)
  })

  it('should provide a method for getting the data from the state', () => {
    const state = Map()
    expect(actions.getLotteriesData(state)).toEqual([])

    const resp = {
      'lotteriesData': {
        'data': [{'a': 'b'}, {'c': 'd'}]
      }
    }

    const state1 = state.mergeDeep(fromJS(resp))

    const res = state1.getIn(['lotteriesData', 'data'], [])

    expect(actions.getLotteriesData(state1)).toEqual(res)
  })
})