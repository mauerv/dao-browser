import {
  FETCH_DAOS_BEGIN, FETCH_DAOS_ERROR, FETCH_DAOS_SUCCESS,
  FETCH_DAO_BEGIN, FETCH_DAO_ERROR, FETCH_DAO_SUCCESS,
  CREATE_DAO_BEGIN, CREATE_DAO_ERROR, CREATE_DAO_SUCCESS,
  DELETE_DAO_BEGIN, DELETE_DAO_ERROR, DELETE_DAO_SUCCESS,
  EDIT_DAO_BEGIN, EDIT_DAO_ERROR, EDIT_DAO_SUCCESS,
  CREATE_DAO_CHILD_BEGIN, CREATE_DAO_CHILD_ERROR, CREATE_DAO_CHILD_SUCCESS,
  DELETE_DAO_CHILD_BEGIN, DELETE_DAO_CHILD_ERROR, DELETE_DAO_CHILD_SUCCESS,
  EDIT_DAO_CHILD_BEGIN, EDIT_DAO_CHILD_ERROR, EDIT_DAO_CHILD_SUCCESS,
} from '../constants/actionTypes'

import {
  doFetchResourceList,
  doFetchResource,
  doCreateResource,
  doCreateAttachedResource,
  doDeleteResource,
  doDeleteChildResource,
  doEditResource,
  doEditAttachedResource,
} from './_baseResourceActions'

export const doFetchDaoList = () => dispatch => {
  doFetchResourceList(
    dispatch,
    'daos',
    FETCH_DAOS_BEGIN,
    FETCH_DAOS_ERROR,
    FETCH_DAOS_SUCCESS
  )
}

export const doFetchDao = id => dispatch => {
  doFetchResource(
    dispatch,
    'daos',
    id,
    FETCH_DAO_BEGIN,
    FETCH_DAO_ERROR,
    FETCH_DAO_SUCCESS
  )
}

export const doDeleteDao = id => dispatch => {
  doDeleteResource(
    dispatch,
    'daos',
    id,
    DELETE_DAO_BEGIN,
    DELETE_DAO_ERROR,
    DELETE_DAO_SUCCESS
  )
}

export const doCreateDao = values => dispatch => {
  doCreateAttachedResource(
    dispatch,
    'daos',
    values,
    CREATE_DAO_BEGIN,
    CREATE_DAO_ERROR,
    CREATE_DAO_SUCCESS
  )
}

export const doEditDao = (values, id) => dispatch => {
  doEditAttachedResource(
    dispatch,
    'daos',
    id,
    values,
    EDIT_DAO_BEGIN,
    EDIT_DAO_ERROR,
    EDIT_DAO_SUCCESS
  )
}

export const doCreateDaoChild = (values, childKey, childResourceName) => dispatch => {
  let formData = { [childKey]: values }
  doCreateResource(
    dispatch,
    childResourceName,
    formData,
    CREATE_DAO_CHILD_BEGIN,
    CREATE_DAO_CHILD_ERROR,
    CREATE_DAO_CHILD_SUCCESS
  )
}

export const doDeleteDaoChild = (id, dao_id, childResourceName) => dispatch => {
  doDeleteChildResource(
    dispatch,
    childResourceName,
    id,
    dao_id,
    DELETE_DAO_CHILD_BEGIN,
    DELETE_DAO_CHILD_ERROR,
    DELETE_DAO_CHILD_SUCCESS,
  )
}

export const doEditDaoChild = (values, id, childResourceName) => dispatch => {
  doEditResource(
    dispatch,
    childResourceName,
    id,
    values,
    EDIT_DAO_CHILD_BEGIN,
    EDIT_DAO_CHILD_ERROR,
    EDIT_DAO_CHILD_SUCCESS
  )
}
