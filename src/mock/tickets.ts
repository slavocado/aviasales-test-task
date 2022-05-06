import { Ticket } from '@ts/types/ticket'

export const ticketsMock: Ticket[] = [
  {
    price: 13400,
    carrier: 'AER',
    segments: [
      {
        origin: 'HKT',
        destination: 'MKS',
        date: '2021-01-26T13:51:50.417-07:00',
        stops: ['HKG', 'JNB'],
        duration: 499,
      },
      {
        origin: 'MKS',
        destination: 'HKT',
        date: '2022-02-23T13:40:50.417-07:00',
        stops: ['HKG'],
        duration: 501,
      },
    ],
  },
  {
    price: 34700,
    carrier: 'S7',
    segments: [
      {
        origin: 'HKT',
        destination: 'MKS',
        date: '2021-01-28T21:34:50.417-07:00',
        stops: ['HKG', 'JNB'],
        duration: 169,
      },
      {
        origin: 'MKS',
        destination: 'HKT',
        date: '2022-02-29T22:17:50.417-07:00',
        stops: ['HKG'],
        duration: 142,
      },
    ],
  },
  {
    price: 23900,
    carrier: 'S7',
    segments: [
      {
        origin: 'JNB',
        destination: 'HKG',
        date: '2021-03-28T10:34:50.417-07:00',
        stops: [],
        duration: 270,
      },
      {
        origin: 'HKG',
        destination: 'JNB',
        date: '2022-04-29T21:13:40.417-07:00',
        stops: [],
        duration: 254,
      },
    ],
  },
  {
    price: 89200,
    carrier: 'S7',
    segments: [
      {
        origin: 'JNB',
        destination: 'HKG',
        date: '2021-06-28T19:10:50.417-07:00',
        stops: ['HKG', 'JNB', 'HKT'],
        duration: 270,
      },
      {
        origin: 'HKG',
        destination: 'JNB',
        date: '2022-06-29T17:55:40.417-07:00',
        stops: ['HKG', 'JNB', 'HKT'],
        duration: 254,
      },
    ],
  },
]
