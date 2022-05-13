import { combineEpics } from 'redux-observable'

import * as ticketsEpics from './tickets'

export default combineEpics(...Object.values(ticketsEpics))
