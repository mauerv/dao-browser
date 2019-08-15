import React from 'react'
import { Link } from 'react-router-dom'

import { useAuth0 } from '../../react-auth0-wrapper'

import * as ROUTES from '../../constants/routes'

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
    	<div className='container'>
    		<Link to={ROUTES.HOME} className='navbar-brand'>DAO Browser</Link>
  		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  		    <span className="navbar-toggler-icon"></span>
  		  </button>
  		  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
  		    <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={ROUTES.ADMIN} className='nav-link text-light'>Admin</Link>
            </li>
  		      <li className="nav-item">
  		      	<Link to={ROUTES.DAOS} className='nav-link text-light'>Explore</Link>
  		      </li>
            <li className="nav-item">
              <Link to={ROUTES.CREATE_INFO} className='nav-link text-light'>Start DAO</Link>
            </li>
            <li className="nav-item">
              <Link to={ROUTES.FUNDING} className='nav-link text-light'>Need Funding?</Link>
            </li>
            <li className='nav-item'>
              {!isAuthenticated && (
                <a
                  onClick={() => loginWithRedirect({})}
                  className='nav-link text-light'
                >
                  Login
                </a>
              )}
              {isAuthenticated && (
                <a
                  onClick={() => logout()}
                  className='nav-link text-light'
                  >
                  Log out
                </a>
              )}
            </li>
  		    </ul>
  	  	</div>
    	</div>
  	</nav>
  )
}

export default Navbar
