import {
  FETCH_DAOS_BEGIN,
  FETCH_DAOS_ERROR,
  FETCH_DAOS_SUCCESS
} from '../constants/actionTypes'

export const doDaoListFetch = () => dispatch => {
  dispatch({ type: FETCH_DAOS_BEGIN })
  fetch('http://localhost:4000/daos')
    .then(response => response.json())
    .then(data => dispatch({
      type: FETCH_DAOS_SUCCESS,
      payload: data
    }))
}