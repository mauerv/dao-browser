import { jsonToFormData } from '../util/formHelpers'

export const doFetchResourceList = async (
  dispatch,
  resourceName,
  beginAction,
  errorAction,
  successAction
) => {
  dispatch({ type: beginAction })
  let response = await fetch(`${process.env.REACT_APP_API_URL}${resourceName}`)
  if (response.ok) {
    let data = await response.json()
    dispatch({
      type: successAction,
      payload: data
    })
  } else {
    dispatch({ type: errorAction })
  }
}

export const doFetchResource = async (
  dispatch,
  resourceName,
  resourceId,
  beginAction,
  errorAction,
  successAction,
) => {
  dispatch({ type: beginAction })
  let response = await fetch(`${process.env.REACT_APP_API_URL}${resourceName}/${resourceId}`)
  if (response.ok) {
    let data = await response.json()
    dispatch({
      type: successAction,
      payload: data
    })
  } else {
    dispatch({ type: errorAction })
  }
}

export const doCreateResource = async (
  dispatch,
  resourceName,
  formData,
  beginAction,
  errorAction,
  successAction
) => {
  dispatch({ type: beginAction })

  let response = await fetch(`${process.env.REACT_APP_API_URL}${resourceName}`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  if (response.ok) {
    let data = await response.json()
    dispatch({
      type: successAction,
      payload: { data: data, resourceName: resourceName }
    })
  } else {
    dispatch({ type: errorAction })
  }
}

export const doCreateAttachedResource = async (
  dispatch,
  resourceName,
  values,
  beginAction,
  errorAction,
  successAction
) => {
  dispatch({ type: beginAction })
  const formData = jsonToFormData(values, 'dao')

  let response = await fetch(`${process.env.REACT_APP_API_URL}${resourceName}`, {
    method: 'post',
    body: formData
  })
  if (response.ok) {
    let data = await response.json()
    dispatch({
      type: successAction,
      payload: { data: data, resourceName: resourceName }
    })
  } else {
    dispatch({ type: errorAction })
  }
}

export const doDeleteResource = async (
  dispatch,
  resourceName,
  resourceId,
  beginAction,
  errorAction,
  successAction
) => {
  dispatch({ type: beginAction })
  let response = await fetch(`${process.env.REACT_APP_API_URL}${resourceName}/${resourceId}`, {
    method: 'delete'
  })
  if (response.ok) {
    dispatch({
      type: successAction,
      payload: resourceId
    })
  } else {
    dispatch({ type: errorAction })
  }
}

export const doDeleteChildResource = async (
  dispatch,
  resourceName,
  resourceId,
  parentId,
  beginAction,
  errorAction,
  successAction
) => {
  dispatch({ type: beginAction })
  let response = await fetch(`${process.env.REACT_APP_API_URL}${resourceName}/${resourceId}`, {
    method: 'delete'
  })
  if (response.ok) {
    dispatch({
      type: successAction,
      payload: { resourceId, parentId, resourceName }
    })
  } else {
    dispatch({ type: errorAction })
  }
}

export const doEditResource = async (
  dispatch,
  resourceName,
  resourceId,
  formData,
  beginAction,
  errorAction,
  successAction
) => {
  dispatch({ type: beginAction })
  let response = await fetch(`${process.env.REACT_APP_API_URL}${resourceName}/${resourceId}`, {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  if (response.ok) {
    let data = await response.json()
    dispatch({
      type: successAction,
      payload: { data: data, resourceName: resourceName }
    })
  } else {
    dispatch({ type: errorAction })
  }
}

export const doEditAttachedResource = async (
  dispatch,
  resourceName,
  resourceId,
  values,
  beginAction,
  errorAction,
  successAction
) => {
  dispatch({ type: beginAction })

  const formData = new FormData()
  for (let key in values) {
    formData.append(`dao[${key}]`, values[key])
  }

  let response = await fetch(`${process.env.REACT_APP_API_URL}${resourceName}/${resourceId}`, {
    method: 'put',
    body: formData
  })
  if (response.ok) {
    let data = await response.json()
    dispatch({
      type: successAction,
      payload: { data: data, resourceName: resourceName }
    })
  } else {
    dispatch({ type: errorAction })
  }
}

export const doLinkResource = async (
  dispatch,
  formData,
  resourceName,
  resourceId,
  parentName,
  parentId,
  beginAction,
  errorAction,
  successAction
) => {
  dispatch({ type: beginAction })
  let response = await fetch(`${process.env.REACT_APP_API_URL}${parentName}/${parentId}/${resourceName}`, {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  if (response.ok) {
    let data = await response.json()
    dispatch({
      type: successAction,
      payload: { data: data, resourceName: resourceName }
    })
  } else {
    dispatch({ type: errorAction })
  }
}

export const doUnlinkResource = async (
  dispatch,
  formData,
  resourceName,
  resourceId,
  parentName,
  parentId,
  beginAction,
  errorAction,
  successAction
) => {
  dispatch({ type: beginAction })
  let response = await fetch(`${process.env.REACT_APP_API_URL}${parentName}/${parentId}/${resourceName}`, {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  if (response.ok) {
    let data = await response.json()
    dispatch({
      type: successAction,
      payload: { data: data, resourceName: resourceName }
    })
  } else {
    dispatch({ type: errorAction })
  }
}
