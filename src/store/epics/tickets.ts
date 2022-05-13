import { getTicketsAsync } from '@store/actions/tickets/creators'
import { Epic } from 'redux-observable'
import { from, of } from 'rxjs'
import { filter, switchMap, map, catchError } from 'rxjs/operators'
import { Api, RootAction, RootState, isOfType } from 'typesafe-actions'

export const loadTodosEpic: Epic<RootAction, RootAction, RootState, Api> = (
  action$,
  state$,
  api
) =>
  action$.pipe(
    filter(isOfType(getTicketsAsync.request)),
    switchMap(() =>
      from(api.ticketsApi.fetchTickets()).pipe(
        map(getTicketsAsync.success),
        catchError((message: string) => of(getTicketsAsync.failure(message)))
      )
    )
  )
