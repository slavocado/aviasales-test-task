import { combineReducers } from 'redux'
import { ticketsReducer } from './ticketsReducer'

const reducers = combineReducers({
  tickets: ticketsReducer,
})

export default reducers
