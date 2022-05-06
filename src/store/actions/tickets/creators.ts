import { State } from '@store/index'
import { Ticket } from '@ts/types/ticket'
import { fetchTickets } from 'api/tickets'
import { ThunkAction } from 'redux-thunk'
import {
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
