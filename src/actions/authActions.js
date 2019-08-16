import { SET_AUTH_TOKEN_SUCCESS } from '../constants/actionTypes'

export const doSetAuthToken = token => dispatch => {
  dispatch({
    type: SET_AUTH_TOKEN_SUCCESS,
    payload: token
  })
}
