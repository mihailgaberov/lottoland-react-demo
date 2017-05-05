/**
 * Created by mgab on 05/05/2017.
 */
import * as types from '../constants/actionTypes'

export function showModal(modal) {
  return {
    type: types.SHOW_MODAL,
    payload: modal
  }
}

export function hideModal(modal) {
  return {
    type: types.HIDE_MODAL,
    payload: modal
  }
}

export function getIsModalOpened(state, modal) {
  return state.getIn(['modal', modal], false)
}