// import { useDispatch } from 'react-redux'
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
// import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'
import { Api, RootAction, RootState } from 'typesafe-actions'

import rootReducer from './redusers'
import rootEpic from './epics'
import api from '../api'

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Api
>({
  dependencies: api,
})

const middlewares = [epicMiddleware]

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
)

epicMiddleware.run(rootEpic)

// export store singleton instance
export default store

// export type State = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch = () => useDispatch<AppDispatch>()
