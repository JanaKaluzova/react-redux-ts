import { combineReducers, legacy_createStore as createStore } from 'redux'
import { userEventsReducer } from './user-events'

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
