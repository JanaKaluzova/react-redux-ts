import { AnyAction } from 'redux'

type UserEvent = {
  id: number
  title: string
  dateStart: string
  dateEnd: string
}

type UserEventsState = {
  byIds: Record<UserEvent['id'], UserEvent>
  allIds: UserEvent['id'][]
}

const initialState: UserEventsState = {
  byIds: {},
  allIds: [],
}

export const userEventsReducer = (state: UserEventsState = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state
  }
}
