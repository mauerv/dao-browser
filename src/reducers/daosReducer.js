import {
  FETCH_DAOS_SUCCESS,
  FETCH_DAO_SUCCESS,
  CREATE_DAO_SUCCESS,
  DELETE_DAO_SUCCESS
} from '../constants/actionTypes'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DAOS_SUCCESS:
      return applyFetchDaosSuccess(state, action)
    case FETCH_DAO_SUCCESS:
      return applyFetchDaoSuccess(state, action)
    case CREATE_DAO_SUCCESS:
      return applyCreateDaoSuccess(state, action)
    case DELETE_DAO_SUCCESS:
      return applyDeleteDaoSuccess(state, action)
    default:
      return state
  }
}

export const applyFetchDaosSuccess = (state, action) => {
  let newState = [ ...action.payload ]
  return newState
}

export const applyFetchDaoSuccess = (state, action) => {
  let daoPresent = false
  let newState = state.map(item => {
    if (item.id === action.payload.id) {
      daoPresent = true
      return action.payload
    } else {
      return item
    }
  })
  if (!daoPresent) {
    newState.push(action.payload)
  }
  return newState
}

export const applyCreateDaoSuccess = (state, action) => [...state, action.payload]

export const applyDeleteDaoSuccess = (state, action) =>
  state.filter(item => item.id !== action.payload)
