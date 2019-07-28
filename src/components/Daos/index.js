import React from 'react'

import DaoListItem from './DaoListItem'

import daos from '../../data/daos'

export default () => (
	<div className='container'>
		<ul className='list-group'>
			{daos.map(dao => (
				<DaoListItem key={dao.id} dao={dao}/>
			))}
		</ul>
	</div>
)
