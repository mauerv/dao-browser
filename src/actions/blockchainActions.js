import {
  FETCH_BLOCKCHAINS_BEGIN, FETCH_BLOCKCHAINS_ERROR, FETCH_BLOCKCHAINS_SUCCESS,
  CREATE_BLOCKCHAIN_BEGIN, CREATE_BLOCKCHAIN_ERROR, CREATE_BLOCKCHAIN_SUCCESS,
  DELETE_BLOCKCHAIN_BEGIN, DELETE_BLOCKCHAIN_ERROR, DELETE_BLOCKCHAIN_SUCCESS,
  EDIT_BLOCKCHAIN_BEGIN, EDIT_BLOCKCHAIN_ERROR, EDIT_BLOCKCHAIN_SUCCESS
} from '../constants/actionTypes'

import { doListFetch } from './resourceActions'

export const doBlockchainListFetch = () => dispatch => {
  doListFetch(
    dispatch,
    'blockchains',
    FETCH_BLOCKCHAINS_BEGIN,
    FETCH_BLOCKCHAINS_ERROR,
    FETCH_BLOCKCHAINS_SUCCESS
  )
}

export const doCreateBlockchain = text => async dispatch => {
  dispatch({ type: CREATE_BLOCKCHAIN_BEGIN })
  let formData = { blockchain: {  name: text } }
  let response = await fetch('http://localhost:4000/blockchains', {
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
      type: CREATE_BLOCKCHAIN_SUCCESS,
      payload: data
    })
  } else {
    dispatch({ type: CREATE_BLOCKCHAIN_ERROR })
  }
}

export const doDeleteBlockchain = id => async dispatch => {
  dispatch({ type: DELETE_BLOCKCHAIN_BEGIN })
  let response = await fetch(`http://localhost:4000/blockchains/${id}`, {
    method: 'delete'
  })
  if (response.ok) {
    dispatch({
      type: DELETE_BLOCKCHAIN_SUCCESS,
      payload: id
    })
  } else {
    dispatch({ type: DELETE_BLOCKCHAIN_ERROR})
  }
}

export const doEditBlockchain = (text, id) => async dispatch => {
  dispatch({ type: EDIT_BLOCKCHAIN_BEGIN })
  const formData = { blockchain: { name: text } }
  let response = await fetch(`http://localhost:4000/blockchains/${id}`, {
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
      type: EDIT_BLOCKCHAIN_SUCCESS,
      payload: data
    })
  } else {
    dispatch({ type: EDIT_BLOCKCHAIN_ERROR })
  }
}
