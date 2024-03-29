import {
  FETCH_BLOCKCHAINS_BEGIN, FETCH_BLOCKCHAINS_ERROR, FETCH_BLOCKCHAINS_SUCCESS,
  CREATE_BLOCKCHAIN_BEGIN, CREATE_BLOCKCHAIN_ERROR, CREATE_BLOCKCHAIN_SUCCESS,
  DELETE_BLOCKCHAIN_BEGIN, DELETE_BLOCKCHAIN_ERROR, DELETE_BLOCKCHAIN_SUCCESS,
  EDIT_BLOCKCHAIN_BEGIN, EDIT_BLOCKCHAIN_ERROR, EDIT_BLOCKCHAIN_SUCCESS
} from '../constants/actionTypes'

import {
  doFetchResourceList,
  doCreateResource,
  doDeleteResource,
  doEditResource
} from './_baseResourceActions'

export const doFetchBlockchainList = () => dispatch => {
  doFetchResourceList(
    dispatch,
    'blockchains',
    FETCH_BLOCKCHAINS_BEGIN,
    FETCH_BLOCKCHAINS_ERROR,
    FETCH_BLOCKCHAINS_SUCCESS
  )
}

export const doCreateBlockchain = values => (dispatch, getState) => {
  let formData = { blockchain: values }
  doCreateResource(
    dispatch,
    getState,
    'blockchains',
    formData,
    CREATE_BLOCKCHAIN_BEGIN,
    CREATE_BLOCKCHAIN_ERROR,
    CREATE_BLOCKCHAIN_SUCCESS
  )
}

export const doDeleteBlockchain = id => (dispatch, getState) => {
  doDeleteResource(
    dispatch,
    getState,
    'blockchains',
    id,
    DELETE_BLOCKCHAIN_BEGIN,
    DELETE_BLOCKCHAIN_ERROR,
    DELETE_BLOCKCHAIN_SUCCESS
  )
}

export const doEditBlockchain = (values, id) => (dispatch, getState) => {
  const formData = { blockchain: values }
  doEditResource(
    dispatch,
    getState,
    'blockchains',
    id,
    formData,
    EDIT_BLOCKCHAIN_BEGIN,
    EDIT_BLOCKCHAIN_ERROR,
    EDIT_BLOCKCHAIN_SUCCESS
  )
}
