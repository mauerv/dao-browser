import { SET_AUTH_TOKEN_SUCCESS } from '../constants/actionTypes'

const initialState = ''

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN_SUCCESS:
      return action.payload
    default:
      return state
  }
}
