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
}

const initialState: TicketsState = {
  loading: false,
}

export const ticketsReducer = (
  state = initialState,
  action: TicketsActionTypes
): TicketsState => {
  switch (action.type) {
    case TICKETS_FAIL:
      return {
        loading: false,
      }
    case TICKETS_LOADING:
      return {
        loading: true,
      }
    case TICKETS_SUCCESS:
      return {
        loading: false,
        tickets: action.payload,
      }
    default:
      return state
  }
}
