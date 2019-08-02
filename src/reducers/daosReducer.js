import {
  FETCH_DAOS_SUCCESS
} from '../constants/actionTypes'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DAOS_SUCCESS:
      return applyFetchDaosSuccess(state, action)
    default:
      return state
  }
}

export const applyFetchDaosSuccess = (state, action) => ([
  ...action.payload
])
