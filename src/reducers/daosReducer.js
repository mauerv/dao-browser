import resourceReducer from './_baseResourceReducer'

import {
  FETCH_DAOS_SUCCESS,
  FETCH_DAO_SUCCESS,
  CREATE_DAO_SUCCESS,
  DELETE_DAO_SUCCESS,
  EDIT_DAO_SUCCESS
} from '../constants/actionTypes'

export default resourceReducer(
  FETCH_DAOS_SUCCESS,
  FETCH_DAO_SUCCESS,
  CREATE_DAO_SUCCESS,
  DELETE_DAO_SUCCESS,
  EDIT_DAO_SUCCESS
)
