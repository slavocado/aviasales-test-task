import { configureStore } from '@reduxjs/toolkit'
import { ticketsApi } from './tickets/'
import { filtersReducer } from './filters/'

const reducers = {
  filters: filtersReducer,
  [ticketsApi.reducerPath]: ticketsApi.reducer,
}

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ticketsApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
