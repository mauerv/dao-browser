import React from 'react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

import Navbar from '../Navbar'
import Footer from '../Footer'
import Landing from '../Landing'
import CreateInfo from '../CreateInfo'
import News from '../News'
import ConnectedDaos from '../../containers/ConnectedDaos'
import Dao from '../Dao'
import ScrollToTop from '../ScrollToTop'
import Funding from '../Funding'

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
						<Route path={ROUTES.NEWS} component={News} />
						<Route exact path={ROUTES.DAOS} component={ConnectedDaos} />
						<Route path={ROUTES.DAO} component={Dao} />
						<Route path={ROUTES.FUNDING} component={Funding} />
					</div>
					<Footer />
		    </div>
	    </ScrollToTop>
    </Router>
  );
}

export default App;
