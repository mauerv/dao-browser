import React from 'react'
import { useAuth0 } from '../../react-auth0-wrapper'

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  if (!isAuthenticated) {
    return (
      <button
        onClick={() => loginWithRedirect({})}
        className='btn btn-primary'
        type='button'
      >
        Login
      </button>
    )
  } else return null
}

export default Login
