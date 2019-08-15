import React from 'react'
import { Route } from 'react-router-dom'

import AdminDaos from './AdminDaos'
import AdminEditDao from './AdminEditDao'
import AdminCreateDao from './AdminCreateDao'
import AdminAuditors from './AdminAuditors'
import AdminTags from './AdminTags'
import AdminCategories from './AdminCategories'
import AdminNavbar from './AdminNavbar'
import AdminHome from './AdminHome'
import AdminContributors from './AdminContributors'
import PrivateRoute from '../PrivateRoute'

import * as ROUTES from '../../constants/routes'

export default () => (
  <div>
    <AdminNavbar />
    <PrivateRoute exact path={ROUTES.ADMIN} component={AdminHome} />
    <PrivateRoute exact path={ROUTES.ADMIN_DAOS} component={AdminDaos} />
    <PrivateRoute path={ROUTES.ADMIN_AUDITORS} component={AdminAuditors} />
    <PrivateRoute path={ROUTES.ADMIN_DAO} component={AdminEditDao} />
    <PrivateRoute path={ROUTES.ADMIN_NEW_DAO} component={AdminCreateDao} />
    <PrivateRoute path={ROUTES.ADMIN_TAGS} component={AdminTags} />
    <PrivateRoute path={ROUTES.ADMIN_CATEGORIES} component={AdminCategories} />
    <PrivateRoute path={ROUTES.ADMIN_CONTRIBUTORS} component={AdminContributors} />
  </div>
)
