import React from 'react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

import Navbar from '../Navbar'
import Footer from '../Footer'
import Landing from '../Landing'
import CreateInfo from '../CreateInfo'
import ConnectedDaos from '../../containers/ConnectedDaos'
import ConnectedDao from '../../containers/ConnectedDao'
import ScrollToTop from '../ScrollToTop'
import Funding from '../Funding'
import Admin from '../Admin'
import CreateDao from '../Admin/CreateDao'
import EditDao from '../Admin/EditDao'
import EditDaos from '../Admin/EditDaos'

import * as ROUTES from '../../constants/routes'

function App() {
  return (
  	<Router onUpdate={() => window.scrollTo(0, 0)}>
  		<ScrollToTop>
		    <div className='App'>
	    		<Navbar />
		    	<div className='content'>
						<Route exact path={ROUTES.HOME} component={Landing} />
						<Route path={ROUTES.CREATE_INFO} component={CreateInfo} />
						<Route exact path={ROUTES.DAOS} component={ConnectedDaos} />
						<Route path={ROUTES.DAO} component={ConnectedDao} />
						<Route path={ROUTES.FUNDING} component={Funding} />
						<Route exact path={ROUTES.ADMIN} component={Admin} />
						<Route exact path={ROUTES.EDIT_DAOS} component={EditDaos} />
						<Route path={ROUTES.CREATE_DAO} component={CreateDao} />
						<Route exact path={ROUTES.EDIT_DAO} component={EditDao} />
					</div>
					<Footer />
		    </div>
	    </ScrollToTop>
    </Router>
  );
}

export default App;
