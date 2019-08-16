import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../../constants/routes'

export default () => (
  <div className='btn-group' role='group'>
    <Link to={ROUTES.ADMIN_DAOS} className='btn btn-secondary'>Manage Daos</Link>
    <Link to={ROUTES.ADMIN_CATEGORIES} className='btn btn-secondary'>Manage Categories</Link>
    <Link to={ROUTES.ADMIN_TAGS} className='btn btn-secondary'>Manage Tags</Link>
    <Link to={ROUTES.ADMIN_AUDITORS} className='btn btn-secondary'>Manage Auditors</Link>
    <Link to={ROUTES.ADMIN_NEW_DAO} className='btn btn-secondary'>Add New DAO</Link>
    <Link to={ROUTES.ADMIN_CONTRIBUTORS} className='btn btn-secondary'>Manage Contributors</Link>
  </div>
)
