import {
  FETCH_FRAMEWORKS_BEGIN, FETCH_FRAMEWORKS_ERROR, FETCH_FRAMEWORKS_SUCCESS,
  CREATE_FRAMEWORK_BEGIN, CREATE_FRAMEWORK_ERROR, CREATE_FRAMEWORK_SUCCESS,
  DELETE_FRAMEWORK_BEGIN, DELETE_FRAMEWORK_ERROR, DELETE_FRAMEWORK_SUCCESS,
  EDIT_FRAMEWORK_BEGIN, EDIT_FRAMEWORK_ERROR, EDIT_FRAMEWORK_SUCCESS
} from '../constants/actionTypes'

import {
  doFetchResourceList,
  doCreateResource,
  doDeleteResource,
  doEditResource
} from './_baseResourceActions'

export const doFetchFrameworkList = () => dispatch => {
  doFetchResourceList(
    dispatch,
    'frameworks',
    FETCH_FRAMEWORKS_BEGIN,
    FETCH_FRAMEWORKS_ERROR,
    FETCH_FRAMEWORKS_SUCCESS
  )
}

export const doCreateFramework = values => (dispatch, getState) => {
  let formData = { framework: values }
  doCreateResource(
    dispatch,
    getState,
    'frameworks',
    formData,
    CREATE_FRAMEWORK_BEGIN,
    CREATE_FRAMEWORK_ERROR,
    CREATE_FRAMEWORK_SUCCESS,
  )
}

export const doDeleteFramework = id => (dispatch, getState) => {
  doDeleteResource(
    dispatch,
    getState,
    'frameworks',
    id,
    DELETE_FRAMEWORK_BEGIN,
    DELETE_FRAMEWORK_ERROR,
    DELETE_FRAMEWORK_SUCCESS
  )
}

export const doEditFramework = (values, id) => (dispatch, getState) => {
  const formData = { framework: values }
  doEditResource(
    dispatch,
    getState,
    'frameworks',
    id,
    formData,
    EDIT_FRAMEWORK_BEGIN,
    EDIT_FRAMEWORK_ERROR,
    EDIT_FRAMEWORK_SUCCESS
  )
}
