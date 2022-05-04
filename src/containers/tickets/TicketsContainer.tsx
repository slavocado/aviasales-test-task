import { TicketComponent } from '@components/ticket'
import { ticketsMock } from 'mock/tickets'

export const TicketsContainer = () => {
  return (
    <>
      {ticketsMock.map((ticket, index) => (
        <TicketComponent key={index} {...ticket} />
      ))}
    </>
  )
}
