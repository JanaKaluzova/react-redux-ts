import { combineReducers, legacy_createStore as createStore } from 'redux'
import { recorderReducer } from './recorder'
import { userEventsReducer } from './user-events'

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
  recorder: recorderReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
