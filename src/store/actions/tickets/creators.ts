import { Ticket } from '@ts/types/ticket'

import { createAsyncAction } from 'typesafe-actions'
// import { TICKETS_FAIL, TICKETS_LOADING, TICKETS_SUCCESS } from './types'

// export const getTickets =
//   (): ThunkAction<Promise<void>, State, unknown, TicketsActionTypes> =>
//   async (dispatch) => {
//     try {
//       dispatch({
//         type: TICKETS_LOADING,
//       })

//       const tickets: Ticket[] = await fetchTickets()

//       dispatch({
//         type: TICKETS_SUCCESS,
//         payload: tickets,
//       })
//     } catch (error) {
//       dispatch({
//         type: TICKETS_FAIL,
//       })
//       console.error('aaaaa', error)
//     }
//   }

// export const setTransfersFilter = (filter: TransfersFilter) => {
//   return {
//     type: SET_TRANSFERS_FILTER,
//     payload: filter,
//   }
// }

// export const setFastFilter = (filter: FastFilter) => {
//   return {
//     type: SET_FAST_FILTER,
//     payload: filter,
//   }
// }

export const getTicketsAsync = createAsyncAction(
  'TICKETS_LOADING',
  'TICKETS_SUCCESS',
  'TICKETS_FAIL'
)<undefined, Ticket[], string>()
