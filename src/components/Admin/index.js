import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import ScrollToTop from '../ScrollToTop'
import AdminDaos from './AdminDaos'
import AdminDao from './AdminDao'
import AdminNewDao from './AdminNewDao'
import AdminAuditors from './AdminAuditors'
import AdminTags from './AdminTags'
import AdminNavbar from './AdminNavbar'
import AdminHome from './AdminHome'

import * as ROUTES from '../../constants/routes'

export default () => (
  <div>
    <AdminNavbar />
    <Route exact path={ROUTES.ADMIN} component={AdminHome} />
    <Route exact path={ROUTES.ADMIN_DAOS} component={AdminDaos} />
    <Route path={ROUTES.ADMIN_AUDITORS} component={AdminAuditors} />
    <Route path={ROUTES.ADMIN_DAO} component={AdminDao} />
    <Route path={ROUTES.ADMIN_NEW_DAO} component={AdminNewDao} />
    <Route path={ROUTES.ADMIN_TAGS} component={AdminTags} />
  </div>
)
