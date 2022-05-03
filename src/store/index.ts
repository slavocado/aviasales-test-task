import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { numberReducer } from './redusers'

export const store = createStore(
  numberReducer,
  // combineReducers(reducers)
  applyMiddleware(thunk)
)
