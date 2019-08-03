import {
  FETCH_STATUSES_SUCCESS,
  CREATE_STATUS_SUCCESS
} from '../constants/actionTypes'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATUSES_SUCCESS:
      return applyFetchStatusesSuccess(state, action)
    case CREATE_STATUS_SUCCESS:
      return applyCreateStatusSuccess(state, action)
    default:
      return state
  }
}

export const applyFetchStatusesSuccess = (state, action) => action.payload

export const applyCreateStatusSuccess = (state, action) => [...state, action.payload]
