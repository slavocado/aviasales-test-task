// import * as actionTypes from '../actions/tickets/types'
import {
  TicketsActionTypes,
  TICKETS_FAIL,
  TICKETS_LOADING,
  TICKETS_SUCCESS,
} from '@store/actions/tickets/types'
import { Ticket } from '@ts/types/ticket'

export type TicketsState = {
  loading: boolean
  tickets?: Ticket[]
  error: boolean
}

const initialState: TicketsState = {
  loading: false,
  error: false,
}

export const ticketsReducer = (
  state = initialState,
  action: TicketsActionTypes
): TicketsState => {
  switch (action.type) {
    case TICKETS_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      }
    case TICKETS_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case TICKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        tickets: action.payload,
      }
    default:
      return state
  }
}
