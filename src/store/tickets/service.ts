import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL } from '@ts/constants/api'
import { Ticket } from '@ts/types/ticket'

interface TicketsResponse {
  tickets: Ticket[]
}

export const ticketsApi = createApi({
  reducerPath: 'ticketsApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getAllTickets: builder.query<TicketsResponse, string>({
      query: () => `/`,
    }),
  }),
})

export const { useGetAllTicketsQuery } = ticketsApi
