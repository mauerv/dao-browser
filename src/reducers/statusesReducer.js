import {
  FETCH_STATUSES_SUCCESS,
  CREATE_STATUS_SUCCESS,
  DELETE_STATUS_SUCCESS,
  EDIT_STATUS_SUCCESS
} from '../constants/actionTypes'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATUSES_SUCCESS:
      return applyFetchStatusesSuccess(state, action)
    case CREATE_STATUS_SUCCESS:
      return applyCreateStatusSuccess(state, action)
    case DELETE_STATUS_SUCCESS:
      return applyDeleteStatusSuccess(state, action)
    case EDIT_STATUS_SUCCESS:
      return applyEditStatusSuccess(state, action)
    default:
      return state
  }
}

export const applyFetchStatusesSuccess = (state, action) => action.payload

export const applyCreateStatusSuccess = (state, action) => [...state, action.payload]

export const applyDeleteStatusSuccess = (state, action) =>
  state.filter(item => item.id !== action.payload)

export const applyEditStatusSuccess = (state, action) =>
  state.map(item => item.id === action.payload.id ? action.payload : item)
