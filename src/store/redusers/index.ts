import * as actionTypes from '../actions/actionTypes'
// import Immutable from 'seamless-immutable';
import { NumberAction } from '../actions/actionCreators'

export type NumberState = {
  a: number
}

const initialState: NumberState = {
  a: 0,
}

export const numberReducer = function reduce(
  state = initialState,
  action: NumberAction
) {
  switch (action.type) {
    case actionTypes.ADD_NUMBER:
      return {
        ...state,
        a: state.a + 1,
      }
    default:
      return state
  }
}
