import { TransfersFilter } from '@ts/types/filters'
import { Ticket } from '@ts/types/ticket'

export const TICKETS_LOADING = 'TICKETS_LOADING'
export const TICKETS_SUCCESS = 'TICKETS_SUCCESS'
export const TICKETS_FAIL = 'TICKETS_FAIL'
export const SET_TRANSFERS_FILTER = 'SET_TRANSFERS_FILTER'

interface TicketsLoading {
  type: typeof TICKETS_LOADING
}
interface TicketsSuccess {
  type: typeof TICKETS_SUCCESS
  payload: Ticket[]
}
interface TicketsFail {
  type: typeof TICKETS_FAIL
}
interface SetTransfersFilter {
  type: typeof SET_TRANSFERS_FILTER
  payload: TransfersFilter
}

export type TicketsActionTypes =
  | TicketsLoading
  | TicketsSuccess
  | TicketsFail
  | SetTransfersFilter
