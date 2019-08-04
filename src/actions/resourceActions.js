export const doResourceListFetch = async (
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

export const doResourceFetch = async (
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
