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
        duration: 168,
      },
      {
        origin: 'MKS',
        destination: 'HKT',
        date: '2022-02-23T13:40:50.417-07:00',
        stops: ['HKG'],
        duration: 143,
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
        duration: 168,
      },
      {
        origin: 'MKS',
        destination: 'HKT',
        date: '202-02-29T22:17:50.417-07:00',
        stops: ['HKG'],
        duration: 143,
      },
    ],
  },
]
