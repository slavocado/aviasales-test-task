import { TicketComponent } from '@components/ticket'
// import { ticketsMock } from 'mock/tickets'
import { useSelector } from 'react-redux'
import { getTickets } from '@store/actions/tickets'
import { useAppDispatch, State } from '@store/index'
import { useEffect } from 'react'

export const TicketsContainer = () => {
  const dispatch = useAppDispatch()
  const ticketsState = useSelector((state: State) => state.tickets)

  const tickets = ticketsState.tickets
  const error = ticketsState.error
  const loading = ticketsState.loading
  const transfersFilter = ticketsState.transfersFilter

  const ticketsToShow = tickets?.filter((ticket) => {
    const oneWayStops = ticket.segments[0].stops
    const wayBackStops = ticket.segments[1].stops
    const stopsCount = transfersFilter?.transfersCount ?? []

    return stopsCount.length === 0
      ? true
      : stopsCount.includes(oneWayStops.length) ||
          stopsCount.includes(wayBackStops.length)
  })

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
        (ticketsToShow !== undefined ? (
          ticketsToShow.map((ticket, index) => (
            <TicketComponent key={index} {...ticket} />
          ))
        ) : (
          <span>Нет доступных билетов</span>
        ))}
    </>
  )
}
