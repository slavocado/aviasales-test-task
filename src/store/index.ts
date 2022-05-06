import { useDispatch } from 'react-redux'
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './redusers/index'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
)

export type State = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
