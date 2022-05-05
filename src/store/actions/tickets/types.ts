import { Ticket } from '@ts/types/ticket'

export const TICKETS_LOADING = 'TICKETS_LOADING'
export const TICKETS_SUCCESS = 'TICKETS_SUCCESS'
export const TICKETS_FAIL = 'TICKETS_FAIL'

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

export type TicketsActionTypes = TicketsLoading | TicketsSuccess | TicketsFail
