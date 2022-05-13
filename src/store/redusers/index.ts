import { combineReducers } from 'redux'
import { ticketsReducer } from './ticketsReducer'

const rootReducer = combineReducers({
  tickets: ticketsReducer,
})

export default rootReducer
