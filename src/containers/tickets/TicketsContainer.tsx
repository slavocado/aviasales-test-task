import { TicketComponent } from '@components/ticket'
// import { ticketsMock } from 'mock/tickets'
import { useSelector } from 'react-redux'
import { RootState } from '@store/index'
import { useGetAllTicketsQuery } from '@store/tickets'

export const TicketsContainer = () => {
  const {
    data: tickets,
    error,
    isLoading,
  } = useGetAllTicketsQuery('', {
    pollingInterval: 3000,
  })

  const transfersFilter = useSelector(
    (state: RootState) => state.filters.transfersFilter
  )
  const fastFilter = useSelector((state: RootState) => state.filters.fastFilter)

  const ticketsToShow = tickets?.tickets
    ?.filter((ticket) => {
      const oneWayStops = ticket.segments[0].stops
      const wayBackStops = ticket.segments[1].stops
      const stopsCount = transfersFilter?.transfersCount ?? []

      return stopsCount.length === 0
        ? true
        : stopsCount.includes(oneWayStops.length) ||
            stopsCount.includes(wayBackStops.length)
    })
    .sort((ticketA, ticketB) => {
      const timeInFlightA =
        ticketA.segments[0].duration + ticketA.segments[1].duration
      const timeInFlightB =
        ticketB.segments[0].duration + ticketB.segments[1].duration

      switch (fastFilter?.filteringType) {
        case 1:
          // cheepest ticket
          return ticketA.price - ticketB.price
        case 2:
          // fastest ticket
          return timeInFlightA - timeInFlightB
        case 3:
          // optimal ticket
          return ticketA.price * timeInFlightA - ticketB.price * timeInFlightB
        default:
          return 0
      }
    })

  return (
    <>
      {isLoading && <span>Загрузка</span>}
      {error && (
        <>
          <span>Произошла ошибка при загрузке</span>
        </>
      )}
      {!error &&
        !isLoading &&
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
