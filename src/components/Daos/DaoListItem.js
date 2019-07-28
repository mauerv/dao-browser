import React from 'react'
import {
	Link
} from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

import ChainTag from '../Tags/ChainTag'
import FrameworkTag from '../Tags/FrameworkTag'

export default ({ dao }) => (
  <div className='list-group-item d-flex flex-column flex-md-row justify-content-between'>

		<div className='d-flex flex-row mt-1'>
	    <Link to={`${ROUTES.DAOS}/${dao.id}`}>
	      <img src={dao.image} alt='' className='img-thumbnail sm-thumbnail' />
	    </Link>
			<div className='ml-3 mt-1'>
		    <Link to={`${ROUTES.DAOS}/${dao.id}`}>
		      <h5>{dao.title}</h5>
		    </Link>
		    <p>{dao.subtitle}</p>
			</div>
		</div>

		<div className='d-flex flex-md-column justify-content-between align-items-end'>
			<ChainTag chain={dao.blockchain} label={false} />
			<FrameworkTag framework={dao.framework} label={false} />
		</div>
  </div>
)
