import {
  FETCH_CONTRIBUTORS_BEGIN, FETCH_CONTRIBUTORS_ERROR, FETCH_CONTRIBUTORS_SUCCESS,
  CREATE_CONTRIBUTOR_BEGIN, CREATE_CONTRIBUTOR_ERROR, CREATE_CONTRIBUTOR_SUCCESS,
  DELETE_CONTRIBUTOR_BEGIN, DELETE_CONTRIBUTOR_ERROR, DELETE_CONTRIBUTOR_SUCCESS,
  EDIT_CONTRIBUTOR_BEGIN, EDIT_CONTRIBUTOR_ERROR, EDIT_CONTRIBUTOR_SUCCESS
} from '../constants/actionTypes'

import {
  doFetchResourceList,
  doCreateResource,
  doDeleteResource,
  doEditResource
} from './_baseResourceActions'

export const doFetchContributorList = () => dispatch => {
  doFetchResourceList(
    dispatch,
    'contributors',
    FETCH_CONTRIBUTORS_BEGIN,
    FETCH_CONTRIBUTORS_ERROR,
    FETCH_CONTRIBUTORS_SUCCESS
  )
}

export const doCreateContributor = values => (dispatch, getState) => {
  let formData = { contributor: values }
  doCreateResource(
    dispatch,
    getState,
    'contributors',
    formData,
    CREATE_CONTRIBUTOR_BEGIN,
    CREATE_CONTRIBUTOR_ERROR,
    CREATE_CONTRIBUTOR_SUCCESS
  )
}

export const doDeleteContributor = id => (dispatch, getState) => {
  doDeleteResource(
    dispatch,
    getState,
    'contributors',
    id,
    DELETE_CONTRIBUTOR_BEGIN,
    DELETE_CONTRIBUTOR_ERROR,
    DELETE_CONTRIBUTOR_SUCCESS
  )
}

export const doEditContributor = (values, id) => (dispatch, getState) => {
  const formData = { contributor: values }
  doEditResource(
    dispatch,
    getState,
    'contributors',
    id,
    formData,
    EDIT_CONTRIBUTOR_BEGIN,
    EDIT_CONTRIBUTOR_ERROR,
    EDIT_CONTRIBUTOR_SUCCESS
  )
}
