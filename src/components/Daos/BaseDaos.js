import React, { Component } from 'react'

import DaoListItem from './DaoListItem'

class BaseDaos extends Component {
	componentDidMount() {
		this.props.onDaoListFetch()
	}

	render() {
		const { daos } = this.props

		return (
			<div className='container'>
				<ul className='list-group'>
					{daos.map(dao => (
						<DaoListItem key={dao.id} dao={dao}/>
					))}
				</ul>
			</div>
		)
	}
}

export default BaseDaos
