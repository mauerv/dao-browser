import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

import { useAuth0 } from "../../react-auth0-wrapper"

import Navbar from '../Navbar'
import Footer from '../Footer'
import Landing from '../Landing'
import CreateInfo from '../CreateInfo'
import Daos from '../Daos'
import Dao from '../Dao'
import Funding from '../Funding'
import Admin from '../Admin'
import ScrollToTop from '../ScrollToTop'
import PrivateRoute from '../PrivateRoute'

import * as ROUTES from '../../constants/routes'

const App = () => {
	const { loading } = useAuth0()

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<Router onUpdate={() => window.scrollTo(0, 0)}>
			<ScrollToTop>
		    <div className='App'>
	    		<Navbar />
		    	<div className='content'>
						<Switch>
							<Route exact path={ROUTES.HOME} component={Landing} />
							<Route path={ROUTES.CREATE_INFO} component={CreateInfo} />
							<Route exact path={ROUTES.DAOS} component={Daos} />
							<Route path={ROUTES.DAO} component={Dao} />
							<Route path={ROUTES.FUNDING} component={Funding} />
							<PrivateRoute path={ROUTES.ADMIN} component={Admin} />
						</Switch>
					</div>
					<Footer />
		    </div>
	    </ScrollToTop>
	  </Router>
	)
}

export default App
