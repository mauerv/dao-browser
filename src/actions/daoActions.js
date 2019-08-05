import {
  FETCH_DAOS_BEGIN, FETCH_DAOS_ERROR, FETCH_DAOS_SUCCESS,
  FETCH_DAO_BEGIN, FETCH_DAO_ERROR, FETCH_DAO_SUCCESS
} from '../constants/actionTypes'

import {
  doFetchResourceList,
  doFetchResource,
  doResourceCreate
} from './_baseResourceActions'

export const doDaoListFetch = () => dispatch => {
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
