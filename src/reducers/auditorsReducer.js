import resourceReducer from './_baseResourceReducer'

import {
  FETCH_AUDITORS_SUCCESS,
  CREATE_AUDITOR_SUCCESS,
  DELETE_AUDITOR_SUCCESS,
  EDIT_AUDITOR_SUCCESS
} from '../constants/actionTypes'

export default resourceReducer(
  FETCH_AUDITORS_SUCCESS,
  CREATE_AUDITOR_SUCCESS,
  DELETE_AUDITOR_SUCCESS,
  EDIT_AUDITOR_SUCCESS
)
