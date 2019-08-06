import objectToFormData from 'object-to-formdata'

export const doFetchResourceList = async (
  dispatch,
  resourceName,
  beginAction,
  errorAction,
  successAction
) => {
  dispatch({ type: beginAction })
  let response = await fetch(`http://localhost:4000/${resourceName}`)
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
  let response = await fetch(`http://localhost:4000/${resourceName}/${resourceId}`)
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

  let response = await fetch(`http://localhost:4000/${resourceName}`, {
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
      payload: data
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
  const formData = new FormData()
  for (let key in values) {
    formData.append(`dao[${key}]`, values[key])
  }

  let response = await fetch(`http://localhost:4000/${resourceName}`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data'
    },
    body: formData
  })
  if (response.ok) {
    let data = await response.json()
    dispatch({
      type: successAction,
      payload: data
    })
  } else {
    dispatch({ type: errorAction })
    let error = await response.json()
    console.log(error);
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
  let response = await fetch(`http://localhost:4000/${resourceName}/${resourceId}`, {
    method: 'delete'
  })
  if (response.ok) {
    dispatch({
      type: successAction,
      payload: resourceId
    })
  } else {
    dispatch({ type: errorAction})
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
  let response = await fetch(`http://localhost:4000/${resourceName}/${resourceId}`, {
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
      payload: data
    })
  } else {
    dispatch({ type: errorAction })
  }
}
