import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import dayReducer from './reducers/dayReducer'

const store = createStore(
  dayReducer,
  applyMiddleware(thunk)
)

export default store