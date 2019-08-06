import { combineReducers } from 'redux'

import daosReducer from './daosReducer'
import statusesReducer from './statusesReducer'
import blockchainsReducer from './blockchainsReducer'
import frameworksReducer from './frameworksReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  daos: daosReducer,
  statuses: statusesReducer,
  blockchains: blockchainsReducer,
  frameworks: frameworksReducer,
  form: formReducer
})
