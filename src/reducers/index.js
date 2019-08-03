import { combineReducers } from 'redux'
import daosReducer from './daosReducer'
import statusesReducer from './statusesReducer'

export default combineReducers({
  daos: daosReducer,
  statuses: statusesReducer
})
