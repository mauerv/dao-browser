import { combineReducers } from 'redux'

import daosReducer from './daosReducer'
import statusesReducer from './statusesReducer'
import blockchainsReducer from './blockchainsReducer'
import frameworksReducer from './frameworksReducer'
import auditorsReducer from './auditorsReducer'

import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  daos: daosReducer,
  statuses: statusesReducer,
  blockchains: blockchainsReducer,
  frameworks: frameworksReducer,
  auditors: auditorsReducer,
  form: formReducer
})
