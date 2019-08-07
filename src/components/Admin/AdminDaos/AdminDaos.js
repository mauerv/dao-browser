import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import * as ROUTES from '../../../constants/routes'

class AdminDaos extends Component {
  componentDidMount() {
    this.props.onFetchDaoList()
  }

  render() {
    const { daos, onDeleteDao } = this.props
    return (
      <div className='container'>
        <h2>Edit Daos</h2>
        <ul className='list-group'>
        {daos.map(dao => (
          <div className='list-group-item d-flex flex-column flex-md-row justify-content-between'>
        		<div className='d-flex flex-row mt-1'>
        	    <Link to={`${ROUTES.DAOS}/${dao.id}`}>
        	      <img src={dao.image_url} alt='' className='img-thumbnail sm-thumbnail' />
        	    </Link>
        			<div className='ml-3 mt-1'>
        		    <Link to={`${ROUTES.DAOS}/${dao.id}`}>
        		      <h5>{dao.name}</h5>
        		    </Link>
        		    <p>{dao.subtitle}</p>
        			</div>
        		</div>

        		<div className='d-flex align-items-center'>
              <Link to={`${ROUTES.ADMIN_DAOS}/${dao.id}`} className='btn btn-info btn-sm'>Edit</Link>
              <button onClick={() => onDeleteDao(dao.id)} className='btn btn-danger btn-sm'>Delete</button>
        		</div>
          </div>
        ))}
        </ul>
      </div>
    )
  }
}

export default AdminDaos
