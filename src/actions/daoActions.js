import {
  FETCH_DAOS_BEGIN, FETCH_DAOS_ERROR, FETCH_DAOS_SUCCESS,
  FETCH_DAO_BEGIN, FETCH_DAO_ERROR, FETCH_DAO_SUCCESS
} from '../constants/actionTypes'

import {
  doResourceListFetch,
  doResourceFetch
} from './resourceActions'

export const doDaoListFetch = () => dispatch => {
  doResourceListFetch(
    dispatch,
    'daos',
    FETCH_DAOS_BEGIN,
    FETCH_DAOS_ERROR,
    FETCH_DAOS_SUCCESS
  )
}

export const doDaoFetch = id => dispatch => {
  doResourceFetch(
    dispatch,
    'daos',
    id,
    FETCH_DAO_BEGIN,
    FETCH_DAO_ERROR,
    FETCH_DAO_SUCCESS
  )
}
