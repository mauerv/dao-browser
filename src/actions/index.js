import {
  FETCH_DAOS_BEGIN,
  FETCH_DAOS_ERROR,
  FETCH_DAOS_SUCCESS,
  FETCH_DAO_BEGIN,
  FETCH_DAO_ERROR,
  FETCH_DAO_SUCCESS
} from '../constants/actionTypes'

export const doDaoListFetch = () => async dispatch => {
  dispatch({ type: FETCH_DAOS_BEGIN })
  let response = await fetch('http://localhost:4000/daos')
  if (response.ok) {
    let data = await response.json()
    dispatch({
      type: FETCH_DAOS_SUCCESS,
      payload: data
    })
  } else {
    dispatch({ type: FETCH_DAOS_ERROR })
  }
}

export const doDaoFetch = id => async dispatch => {
  dispatch({ type: FETCH_DAO_BEGIN })
  let response = await fetch(`http://localhost:4000/daos/${id}`)
  if (response.ok) {
    let data = await response.json()
    dispatch({
      type: FETCH_DAO_SUCCESS,
      payload: data
    })
  } else {
    dispatch({ type: FETCH_DAO_ERROR })
  }
}
