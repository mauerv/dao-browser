import resourceReducer from './resourceReducer'

import {
  FETCH_BLOCKCHAINS_SUCCESS,
  CREATE_BLOCKCHAIN_SUCCESS,
  DELETE_BLOCKCHAIN_SUCCESS,
  EDIT_BLOCKCHAIN_SUCCESS
} from '../constants/actionTypes'

export default resourceReducer(
  FETCH_BLOCKCHAINS_SUCCESS,
  CREATE_BLOCKCHAIN_SUCCESS,
  DELETE_BLOCKCHAIN_SUCCESS,
  EDIT_BLOCKCHAIN_SUCCESS
)
