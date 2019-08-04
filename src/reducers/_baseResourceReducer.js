const initialState = []

export default (
  fetchAction,
  createAction,
  deleteAction,
  editAction
) => (state = initialState, action) => {
  switch (action.type) {
    case fetchAction:
      return applyFetchResourceListSuccess(state, action)
    case createAction:
      return applyCreateResourceSuccess(state, action)
    case deleteAction:
      return applyDeleteResourceSuccess(state, action)
    case editAction:
      return applyEditResourceSuccess(state, action)
    default:
      return state
  }
}

export const applyFetchResourceListSuccess = (state, action) => action.payload

export const applyCreateResourceSuccess = (state, action) => [...state, action.payload]

export const applyDeleteResourceSuccess = (state, action) =>
  state.filter(item => item.id !== action.payload)

export const applyEditResourceSuccess = (state, action) =>
  state.map(item => item.id === action.payload.id ? action.payload : item)
