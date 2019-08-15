import React from 'react'
import { useAuth0 } from '../../react-auth0-wrapper'

const Login = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  if (!isAuthenticated) {
    return (
      <a
        onClick={() => loginWithRedirect({})}
        className='btn btn-primary'
      >
        Login
      </a>
    )
  } else return null
}

export default Login
