import {
  FETCH_BLOCKCHAINS_SUCCESS,
  CREATE_BLOCKCHAIN_SUCCESS,
  DELETE_BLOCKCHAIN_SUCCESS,
  EDIT_BLOCKCHAIN_SUCCESS
} from '../constants/actionTypes'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOCKCHAINS_SUCCESS:
      return applyFetchBlockchainsSuccess(state, action)
    case CREATE_BLOCKCHAIN_SUCCESS:
      return applyCreateBlockchainSuccess(state, action)
    case DELETE_BLOCKCHAIN_SUCCESS:
      return applyDeleteBlockchainSuccess(state, action)
    case EDIT_BLOCKCHAIN_SUCCESS:
      return applyEditBlockchainSuccess(state, action)
    default:
      return state
  }
}

export const applyFetchBlockchainsSuccess = (state, action) => action.payload

export const applyCreateBlockchainSuccess = (state, action) => [...state, action.payload]

export const applyDeleteBlockchainSuccess = (state, action) =>
  state.filter(item => item.id !== action.payload)

export const applyEditBlockchainSuccess = (state, action) =>
  state.map(item => item.id === action.payload.id ? action.payload : item)
