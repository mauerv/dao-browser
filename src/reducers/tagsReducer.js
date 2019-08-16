import resourceReducer from './_baseResourceReducer'

import {
  FETCH_TAGS_SUCCESS,
  FETCH_TAG_SUCCESS,
  CREATE_TAG_SUCCESS,
  DELETE_TAG_SUCCESS,
  EDIT_TAG_SUCCESS
} from '../constants/actionTypes'

export default resourceReducer(
  FETCH_TAGS_SUCCESS,
  FETCH_TAG_SUCCESS,
  CREATE_TAG_SUCCESS,
  DELETE_TAG_SUCCESS,
  EDIT_TAG_SUCCESS
)
