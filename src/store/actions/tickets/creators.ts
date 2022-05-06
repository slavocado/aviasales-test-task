import { State } from '@store/index'
import { TransfersFilter } from '@ts/types/filters'
import { Ticket } from '@ts/types/ticket'
import { fetchTickets } from 'api/tickets'
import { ThunkAction } from 'redux-thunk'
import {
  SET_TRANSFERS_FILTER,
  TicketsActionTypes,
  TICKETS_FAIL,
  TICKETS_LOADING,
  TICKETS_SUCCESS,
} from './types'

export const getTickets =
  (): ThunkAction<Promise<void>, State, unknown, TicketsActionTypes> =>
  async (dispatch) => {
    try {
      dispatch({
        type: TICKETS_LOADING,
      })

      const tickets: Ticket[] = await fetchTickets()

      dispatch({
        type: TICKETS_SUCCESS,
        payload: tickets,
      })
    } catch (error) {
      dispatch({
        type: TICKETS_FAIL,
      })
      console.error('aaaaa', error)
    }
  }

export const setTransfersFilter = (filter: TransfersFilter) => {
  return {
    type: SET_TRANSFERS_FILTER,
    payload: filter,
  }
}
