import resourceReducer from './resourceReducer'

import {
  FETCH_STATUSES_SUCCESS,
  CREATE_STATUS_SUCCESS,
  DELETE_STATUS_SUCCESS,
  EDIT_STATUS_SUCCESS
} from '../constants/actionTypes'

export default resourceReducer(
  FETCH_STATUSES_SUCCESS,
  CREATE_STATUS_SUCCESS,
  DELETE_STATUS_SUCCESS,
  EDIT_STATUS_SUCCESS
)
