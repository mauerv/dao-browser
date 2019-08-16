import {
  FETCH_DAOS_BEGIN, FETCH_DAOS_ERROR, FETCH_DAOS_SUCCESS,
  FETCH_DAO_BEGIN, FETCH_DAO_ERROR, FETCH_DAO_SUCCESS,
  CREATE_DAO_BEGIN, CREATE_DAO_ERROR, CREATE_DAO_SUCCESS,
  DELETE_DAO_BEGIN, DELETE_DAO_ERROR, DELETE_DAO_SUCCESS,
  EDIT_DAO_BEGIN, EDIT_DAO_ERROR, EDIT_DAO_SUCCESS,
  CREATE_DAO_CHILD_BEGIN, CREATE_DAO_CHILD_ERROR, CREATE_DAO_CHILD_SUCCESS,
  DELETE_DAO_CHILD_BEGIN, DELETE_DAO_CHILD_ERROR, DELETE_DAO_CHILD_SUCCESS,
  EDIT_DAO_CHILD_BEGIN, EDIT_DAO_CHILD_ERROR, EDIT_DAO_CHILD_SUCCESS,
  LINK_DAO_RESOURCE_BEGIN, LINK_DAO_RESOURCE_ERROR, LINK_DAO_RESOURCE_SUCCESS,
  UNLINK_DAO_RESOURCE_BEGIN, UNLINK_DAO_RESOURCE_ERROR, UNLINK_DAO_RESOURCE_SUCCESS
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
  doLinkResource,
  doUnlinkResource
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

export const doDeleteDao = id => (dispatch, getState) => {
  doDeleteResource(
    dispatch,
    getState,
    'daos',
    id,
    DELETE_DAO_BEGIN,
    DELETE_DAO_ERROR,
    DELETE_DAO_SUCCESS
  )
}

export const doCreateDao = values => (dispatch, getState) => {
  doCreateAttachedResource(
    dispatch,
    getState,
    'daos',
    values,
    CREATE_DAO_BEGIN,
    CREATE_DAO_ERROR,
    CREATE_DAO_SUCCESS
  )
}

export const doEditDao = (values, id) => (dispatch, getState) => {
  doEditAttachedResource(
    dispatch,
    getState,
    'daos',
    id,
    values,
    EDIT_DAO_BEGIN,
    EDIT_DAO_ERROR,
    EDIT_DAO_SUCCESS
  )
}

export const doCreateDaoChild = (values, childKey, childResourceName) => (dispatch, getState) => {
  let formData = { [childKey]: values }
  doCreateResource(
    dispatch,
    getState,
    childResourceName,
    formData,
    CREATE_DAO_CHILD_BEGIN,
    CREATE_DAO_CHILD_ERROR,
    CREATE_DAO_CHILD_SUCCESS
  )
}

export const doDeleteDaoChild = (id, dao_id, childResourceName) => (dispatch, getState) => {
  doDeleteChildResource(
    dispatch,
    getState,
    childResourceName,
    id,
    dao_id,
    DELETE_DAO_CHILD_BEGIN,
    DELETE_DAO_CHILD_ERROR,
    DELETE_DAO_CHILD_SUCCESS,
  )
}

export const doEditDaoChild = (values, id, childResourceName) => (dispatch, getState) => {
  doEditResource(
    dispatch,
    getState,
    childResourceName,
    id,
    values,
    EDIT_DAO_CHILD_BEGIN,
    EDIT_DAO_CHILD_ERROR,
    EDIT_DAO_CHILD_SUCCESS
  )
}

export const doLinkDaoResource = (
  id,
  parentId,
  singularResourceKey,
  pluralResourceKey
) => (dispatch, getState) => {
  const values = { dao: { [`${singularResourceKey}_id`]: id } }
  doLinkResource(
    dispatch,
    getState,
    values,
    pluralResourceKey,
    id,
    'daos',
    parentId,
    LINK_DAO_RESOURCE_BEGIN,
    LINK_DAO_RESOURCE_ERROR,
    LINK_DAO_RESOURCE_SUCCESS,
  )
}

export const doUnlinkDaoResource = (
  id,
  parentId,
  singularResourceKey,
  pluralResourceKey
) => (dispatch, getState) => {
  const values = { dao: { [`${singularResourceKey}_id`]: id } }
  doUnlinkResource(
    dispatch,
    getState,
    values,
    pluralResourceKey,
    id,
    'daos',
    parentId,
    UNLINK_DAO_RESOURCE_BEGIN,
    UNLINK_DAO_RESOURCE_ERROR,
    UNLINK_DAO_RESOURCE_SUCCESS,
  )
}
