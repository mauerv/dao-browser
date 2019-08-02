import { combineReducers } from 'redux'
import daosReducer from './daosReducer'

export default combineReducers({
  daos: daosReducer
})
