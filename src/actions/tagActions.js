import {
  FETCH_TAGS_BEGIN, FETCH_TAGS_ERROR, FETCH_TAGS_SUCCESS,
  CREATE_TAG_BEGIN, CREATE_TAG_ERROR, CREATE_TAG_SUCCESS,
  DELETE_TAG_BEGIN, DELETE_TAG_ERROR, DELETE_TAG_SUCCESS,
  EDIT_TAG_BEGIN, EDIT_TAG_ERROR, EDIT_TAG_SUCCESS
} from '../constants/actionTypes'

import {
  doFetchResourceList,
  doCreateResource,
  doDeleteResource,
  doEditResource
} from './_baseResourceActions'

export const doFetchTagList = () => dispatch => {
  doFetchResourceList(
    dispatch,
    'tags',
    FETCH_TAGS_BEGIN,
    FETCH_TAGS_ERROR,
    FETCH_TAGS_SUCCESS
  )
}

export const doCreateTag = values => dispatch => {
  let formData = { tag: values }
  doCreateResource(
    dispatch,
    'tags',
    formData,
    CREATE_TAG_BEGIN,
    CREATE_TAG_ERROR,
    CREATE_TAG_SUCCESS
  )
}

export const doDeleteTag = id => dispatch => {
  doDeleteResource(
    dispatch,
    'tags',
    id,
    DELETE_TAG_BEGIN,
    DELETE_TAG_ERROR,
    DELETE_TAG_SUCCESS
  )
}

export const doEditTag = (values, id) => dispatch => {
  const formData = { tag: values }
  doEditResource(
    dispatch,
    'tags',
    id,
    formData,
    EDIT_TAG_BEGIN,
    EDIT_TAG_ERROR,
    EDIT_TAG_SUCCESS
  )
}
