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

import * as ROUTES from '../../constants/routes'

export default () => (
  <div>
    <AdminNavbar />
    <Route exact path={ROUTES.ADMIN} component={AdminHome} />
    <Route exact path={ROUTES.ADMIN_DAOS} component={AdminDaos} />
    <Route path={ROUTES.ADMIN_AUDITORS} component={AdminAuditors} />
    <Route path={ROUTES.ADMIN_DAO} component={AdminEditDao} />
    <Route path={ROUTES.ADMIN_NEW_DAO} component={AdminCreateDao} />
    <Route path={ROUTES.ADMIN_TAGS} component={AdminTags} />
    <Route path={ROUTES.ADMIN_CATEGORIES} component={AdminCategories} />
    <Route path={ROUTES.ADMIN_CONTRIBUTORS} component={AdminContributors} />
  </div>
)
