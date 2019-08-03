export const doListFetch = async (
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
