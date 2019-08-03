import {
  FETCH_STATUSES_BEGIN,
  FETCH_STATUSES_ERROR,
  FETCH_STATUSES_SUCCESS
} from '../constants/actionTypes'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATUSES_SUCCESS:
      return applyFetchStatusesSuccess(state, action)
    default:
      return state
  }
}

export const applyFetchStatusesSuccess = (state, action) => action.payload
