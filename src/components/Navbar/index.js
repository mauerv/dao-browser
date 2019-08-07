import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

export default () => (
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
		    </ul>
	  	</div>
  	</div>
	</nav>
)
