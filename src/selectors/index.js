export const getDaos = state => state.daos

export const getDao = (state, id) =>
  state.daos.find(dao => dao.id === id)

export const getStatuses = state => state.statuses
