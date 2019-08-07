import {
  FETCH_AUDITORS_BEGIN, FETCH_AUDITORS_ERROR, FETCH_AUDITORS_SUCCESS,
  CREATE_AUDITOR_BEGIN, CREATE_AUDITOR_ERROR, CREATE_AUDITOR_SUCCESS,
  DELETE_AUDITOR_BEGIN, DELETE_AUDITOR_ERROR, DELETE_AUDITOR_SUCCESS,
  EDIT_AUDITOR_BEGIN, EDIT_AUDITOR_ERROR, EDIT_AUDITOR_SUCCESS
} from '../constants/actionTypes'

import {
  doFetchResourceList,
  doCreateResource,
  doDeleteResource,
  doEditResource
} from './_baseResourceActions'

export const doFetchAuditorList = () => dispatch => {
  doFetchResourceList(
    dispatch,
    'auditors',
    FETCH_AUDITORS_BEGIN,
    FETCH_AUDITORS_ERROR,
    FETCH_AUDITORS_SUCCESS
  )
}

export const doCreateAuditor = values => dispatch => {
  let formData = { auditor: values }
  doCreateResource(
    dispatch,
    'auditors',
    formData,
    CREATE_AUDITOR_BEGIN,
    CREATE_AUDITOR_ERROR,
    CREATE_AUDITOR_SUCCESS
  )
}

export const doDeleteAuditor = id => dispatch => {
  doDeleteResource(
    dispatch,
    'auditors',
    id,
    DELETE_AUDITOR_BEGIN,
    DELETE_AUDITOR_ERROR,
    DELETE_AUDITOR_SUCCESS
  )
}

export const doEditAuditor = (values, id) => dispatch => {
  const formData = { auditor: values }
  doEditResource(
    dispatch,
    'auditors',
    id,
    formData,
    EDIT_AUDITOR_BEGIN,
    EDIT_AUDITOR_ERROR,
    EDIT_AUDITOR_SUCCESS
  )
}
