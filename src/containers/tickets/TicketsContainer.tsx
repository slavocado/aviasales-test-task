import { TicketComponent } from '@components/ticket'
// import { ticketsMock } from 'mock/tickets'
import { useSelector } from 'react-redux'
import { getTickets } from '@store/actions/tickets'
import { useAppDispatch, State } from '@store/index'
import { useEffect } from 'react'
import { styled } from '@linaria/react'
import { Colors } from '@ts/enums/colors'

export const TicketsContainer = () => {
  const dispatch = useAppDispatch()
  const ticketsState = useSelector((state: State) => state.tickets)

  const tickets = ticketsState.tickets
  const error = ticketsState.error
  const loading = ticketsState.loading
  const transfersFilter = ticketsState.transfersFilter
  const fastFilter = ticketsState.fastFilter

  const ticketsToShow = tickets
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
          <RetryButton onClick={retryLoading}>Попробовать еще раз</RetryButton>
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

const RetryButton = styled.button`
  display: grid;
  place-items: center;
  padding: 15px 10px;
  border-radius: 5px;
  background-color: ${Colors.white};
  border: 1px solid ${Colors.lightGray};
  color: ${Colors.black};
  transition: all 150ms;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;

  &:hover {
    background-color: ${Colors.lightGray};
    cursor: pointer;
  }
  &:active {
    background-color: ${Colors.blue};
    color: ${Colors.white};
  }
`
