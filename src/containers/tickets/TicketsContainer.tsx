import { TicketComponent } from '@components/ticket'
// import { ticketsMock } from 'mock/tickets'
import { useSelector } from 'react-redux'
import { getTickets } from '@store/actions/tickets'
import { useAppDispatch, State } from '@store/index'

export const TicketsContainer = () => {
  const dispatch = useAppDispatch()
  const ticketsState = useSelector((state: State) => state.tickets)

  const handleClick = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(getTickets())
  }

  console.log(ticketsState)
  const tickets = ticketsState.tickets ?? []

  return (
    <>
      {tickets.map((ticket, index) => (
        <TicketComponent key={index} {...ticket} />
      ))}
      <button onClick={handleClick}>get</button>
    </>
  )
}
