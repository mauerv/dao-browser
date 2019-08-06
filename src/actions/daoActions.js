import {
  FETCH_DAOS_BEGIN, FETCH_DAOS_ERROR, FETCH_DAOS_SUCCESS,
  FETCH_DAO_BEGIN, FETCH_DAO_ERROR, FETCH_DAO_SUCCESS,
  CREATE_DAO_BEGIN, CREATE_DAO_ERROR, CREATE_DAO_SUCCESS
} from '../constants/actionTypes'

import {
  doFetchResourceList,
  doFetchResource,
  doCreateResource,
  doCreateAttachedResource
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
