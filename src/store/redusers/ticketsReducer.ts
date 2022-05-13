// import * as actionTypes from '../actions/tickets/types'
import { getTicketsAsync } from '@store/actions/tickets/creators'
// import {
//   SET_FAST_FILTER,
//   SET_TRANSFERS_FILTER,
//   TicketsActionTypes,
//   TICKETS_FAIL,
//   TICKETS_LOADING,
//   TICKETS_SUCCESS,
// } from '@store/actions/tickets/types'
import { FastFilter, TransfersFilter } from '@ts/types/filters'
import { Ticket } from '@ts/types/ticket'
import { createReducer } from 'typesafe-actions'

// export type TicketsState = {
//   loading: boolean
//   tickets?: Ticket[]
//   error: boolean
//   transfersFilter?: TransfersFilter
//   fastFilter?: FastFilter
// }

const initialState = {
  loading: false,
  error: false,
}

// export const ticketsReducer = (
//   state = initialState,
//   action: TicketsActionTypes
// ): TicketsState => {
//   switch (action.type) {
//     case TICKETS_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: true,
//       }
//     case TICKETS_LOADING:
//       return {
//         ...state,
//         loading: true,
//         error: false,
//       }
//     case TICKETS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         error: false,
//         tickets: action.payload,
//       }
//     case SET_TRANSFERS_FILTER:
//       return {
//         ...state,
//         transfersFilter: action.payload,
//       }
//     case SET_FAST_FILTER:
//       return {
//         ...state,
//         fastFilter: action.payload,
//       }
//     default:
//       return state
//   }
// }

export const ticketsReducer = createReducer(initialState).handleAction(
  getTicketsAsync.success,
  (state, action) => action.payload
)

export default {
  ticketsReducer,
}
export type TicketsState = ReturnType<typeof ticketsReducer>
