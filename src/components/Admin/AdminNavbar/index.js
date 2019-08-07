import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../../constants/routes'

export default () => (
  <div className='btn-group' role='group'>
    <Link to={ROUTES.ADMIN} className='btn btn-secondary'>Dashboard</Link>
    <Link to={ROUTES.ADMIN_DAOS} className='btn btn-secondary'>Admin Daos</Link>
    <Link to={ROUTES.ADMIN_TAGS} className='btn btn-secondary'>Admin Tags</Link>
    <Link to={ROUTES.ADMIN_NEW_DAO} className='btn btn-secondary'>Add New DAO</Link>
  </div>
)
