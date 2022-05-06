import { TicketComponent } from '@components/ticket'
// import { ticketsMock } from 'mock/tickets'
import { useSelector } from 'react-redux'
import { getTickets } from '@store/actions/tickets'
import { useAppDispatch, State } from '@store/index'
import { useEffect } from 'react'

export const TicketsContainer = () => {
  const dispatch = useAppDispatch()
  const ticketsState = useSelector((state: State) => state.tickets)

  const retryLoading = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(getTickets())
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(getTickets())
  }, [dispatch])

  const tickets = ticketsState.tickets
  const error = ticketsState.error
  const loading = ticketsState.loading

  return (
    <>
      {loading && <span>Загрузка</span>}
      {error && (
        <>
          <span>Произошла ошибка при загрузке</span>
          <button onClick={retryLoading}>Попробовать еще раз</button>
        </>
      )}
      {!error &&
        !loading &&
        (tickets !== undefined ? (
          tickets.map((ticket, index) => (
            <TicketComponent key={index} {...ticket} />
          ))
        ) : (
          <span>Нет доступных билетов</span>
        ))}
    </>
  )
}
