import {
  FETCH_STATUSES_BEGIN, FETCH_STATUSES_ERROR, FETCH_STATUSES_SUCCESS,
  CREATE_STATUS_BEGIN, CREATE_STATUS_ERROR, CREATE_STATUS_SUCCESS,
  DELETE_STATUS_BEGIN, DELETE_STATUS_ERROR, DELETE_STATUS_SUCCESS,
  EDIT_STATUS_BEGIN, EDIT_STATUS_ERROR, EDIT_STATUS_SUCCESS
} from '../constants/actionTypes'

import { doListFetch } from './resourceActions'

export const doStatusListFetch = () => dispatch => {
  doListFetch(
    dispatch,
    'statuses',
    FETCH_STATUSES_BEGIN,
     FETCH_STATUSES_ERROR,
     FETCH_STATUSES_SUCCESS
   )
}

export const doCreateStatus = text => async dispatch => {
  dispatch({ type: CREATE_STATUS_BEGIN })
  let formData = { status: {  name: text } }
  let response = await fetch('http://localhost:4000/statuses', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  if (response.ok) {
    let data = await response.json()
    dispatch({
      type: CREATE_STATUS_SUCCESS,
      payload: data
    })
  } else {
    dispatch({ type: CREATE_STATUS_ERROR })
  }
}

export const doDeleteStatus = id => async dispatch => {
  dispatch({ type: DELETE_STATUS_BEGIN })
  let response = await fetch(`http://localhost:4000/statuses/${id}`, {
    method: 'delete'
  })
  if (response.ok) {
    dispatch({
      type: DELETE_STATUS_SUCCESS,
      payload: id
    })
  } else {
    dispatch({ type: DELETE_STATUS_ERROR})
  }
}

export const doEditStatus = (text, id) => async dispatch => {
  dispatch({ type: EDIT_STATUS_BEGIN })
  const formData = { status: { name: text } }
  let response = await fetch(`http://localhost:4000/statuses/${id}`, {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  if (response.ok) {
    let data = await response.json()
    dispatch({
      type: EDIT_STATUS_SUCCESS,
      payload: data
    })
  } else {
    dispatch({ type: EDIT_STATUS_ERROR })
  }
}
