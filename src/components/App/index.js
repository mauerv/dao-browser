import React from 'react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

import Navbar from '../Navbar'
import Footer from '../Footer'
import Landing from '../Landing'
import CreateInfo from '../CreateInfo'
import Daos from '../Daos'
import Dao from '../Dao'
import ScrollToTop from '../ScrollToTop'
import Funding from '../Funding'
import Admin from '../Admin'

import * as ROUTES from '../../constants/routes'

export default () => (
	<Router onUpdate={() => window.scrollTo(0, 0)}>
		<ScrollToTop>
	    <div className='App'>
    		<Navbar />
	    	<div className='content'>
					<Route exact path={ROUTES.HOME} component={Landing} />
					<Route path={ROUTES.CREATE_INFO} component={CreateInfo} />
					<Route exact path={ROUTES.DAOS} component={Daos} />
					<Route path={ROUTES.DAO} component={Dao} />
					<Route path={ROUTES.FUNDING} component={Funding} />
					<Route path={ROUTES.ADMIN} component={Admin} />
				</div>
				<Footer />
	    </div>
    </ScrollToTop>
  </Router>
)
