import { URL } from '@ts/constants/api'
import { Ticket } from '@ts/types/ticket'

export const fetchTickets = async () => {
  const tickets: Ticket[] = await fetch(URL)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return data.tickets
    })

  return tickets
}
