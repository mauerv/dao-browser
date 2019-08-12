const initialState = []

export default (
  fetchListAction,
  fetchAction,
  createAction,
  deleteAction,
  editAction,
  createChildAction,
  deleteChildAction,
  editChildAction
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
    case createChildAction:
      return applyCreateChildSuccess(state, action)
    case deleteChildAction:
      return applyDeleteChildSuccess(state, action)
    case editChildAction:
      return applyEditChildSuccess(state, action)
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

export const applyCreateResourceSuccess = (state, action) => [...state, action.payload.data]

export const applyDeleteResourceSuccess = (state, action) =>
  state.filter(item => item.id !== action.payload)

export const applyEditResourceSuccess = (state, action) =>
  state.map(item => item.id === action.payload.data.id ? action.payload.data : item)

export const applyCreateChildSuccess = (state, action) => state.map(resource => {
  const { data, resourceName } = action.payload
  if (resource.id === data.dao_id) {
    return {...resource, [resourceName]: [...resource[resourceName], data]}
  } else {
    return resource
  }
})

export const applyDeleteChildSuccess = (state, action) => {
  const { resourceId, parentId, resourceName } = action.payload
  let newState = state.map(resource => {
    if (resource.id === parentId) {
      let newCollection = resource[resourceName].filter(item => item.id !== resourceId)
      return { ...resource, [resourceName]: newCollection }
    } else {
      return resource
    }
  })
  return newState
}

export const applyEditChildSuccess = (state, action) => {
    const { data, resourceName } = action.payload
    let newState = state.map(resource => {
      if (resource.id === data.dao_id) {
        let newCollection = resource[resourceName].map(childResource => {
          if (childResource.id === data.id) {
            return data
          } else {
            return childResource
          }
        })
        return { ...resource, [resourceName]: newCollection }
      } else {
        return resource
      }
    })
    return newState
}
