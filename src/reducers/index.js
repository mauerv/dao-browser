import { combineReducers } from 'redux'

import daosReducer from './daosReducer'
import statusesReducer from './statusesReducer'
import blockchainsReducer from './blockchainsReducer'

export default combineReducers({
  daos: daosReducer,
  statuses: statusesReducer,
  blockchains: blockchainsReducer
})
