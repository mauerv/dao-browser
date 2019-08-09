import {
  FETCH_STATUSES_BEGIN, FETCH_STATUSES_ERROR, FETCH_STATUSES_SUCCESS,
  CREATE_STATUS_BEGIN, CREATE_STATUS_ERROR, CREATE_STATUS_SUCCESS,
  DELETE_STATUS_BEGIN, DELETE_STATUS_ERROR, DELETE_STATUS_SUCCESS,
  EDIT_STATUS_BEGIN, EDIT_STATUS_ERROR, EDIT_STATUS_SUCCESS
} from '../constants/actionTypes'

import {
  doFetchResourceList,
  doCreateResource,
  doDeleteResource,
  doEditResource
} from './_baseResourceActions'

export const doFetchStatusList = () => dispatch => {
  doFetchResourceList(
    dispatch,
    'statuses',
    FETCH_STATUSES_BEGIN,
     FETCH_STATUSES_ERROR,
     FETCH_STATUSES_SUCCESS
   )
}

export const doCreateStatus = values => dispatch => {
  let formData = { status: values }
  doCreateResource(
    dispatch,
    'statuses',
    formData,
    CREATE_STATUS_BEGIN,
    CREATE_STATUS_ERROR,
    CREATE_STATUS_SUCCESS
  )
}

export const doDeleteStatus = id => dispatch => {
  doDeleteResource(
    dispatch,
    'statuses',
    id,
    DELETE_STATUS_BEGIN,
    DELETE_STATUS_ERROR,
    DELETE_STATUS_SUCCESS
  )
}

export const doEditStatus = (values, id) => dispatch => {
  const formData = { status: values }
  doEditResource(
    dispatch,
    'statuses',
    id,
    formData,
    EDIT_STATUS_BEGIN,
    EDIT_STATUS_ERROR,
    EDIT_STATUS_SUCCESS

  )
}
