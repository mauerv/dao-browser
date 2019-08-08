const initialState = []

export default (
  fetchListAction,
  fetchAction,
  createAction,
  deleteAction,
  editAction
) => (state = initialState, action) => {
  switch (action.type) {
    case fetchListAction:
      return applyFetchResourceListSuccess(state, action)
    case fetchAction:
      return applyFetchResourceSuccess(state, action)
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

export const applyFetchResourceSuccess = (state, action) => {
  let isPresent = false
  let newState = state.map(item => {
    if (item.id === action.payload.id) {
      isPresent = true
      return action.payload
    } else {
      return item
    }
  })
  if (!isPresent) {
    newState.push(action.payload)
  }
  return newState
}

export const applyCreateResourceSuccess = (state, action) => [...state, action.payload]

export const applyDeleteResourceSuccess = (state, action) =>
  state.filter(item => item.id !== action.payload)

export const applyEditResourceSuccess = (state, action) =>
  state.map(item => item.id === action.payload.id ? action.payload : item)
