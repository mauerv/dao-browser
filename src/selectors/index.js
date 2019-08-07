export const getDaos = state => state.daos

export const getDao = (state, id) =>
  state.daos.find(dao => dao.id === id)

export const getStatuses = state => state.statuses

export const getBlockchains = state => state.blockchains

export const getFrameworks = state => state.frameworks

export const getAuditors = state => state.auditors
