import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../../constants/routes'

const AdminDaosItem = ({ dao, onDeleteDao }) => (
  <div key={dao.id} className='list-group-item d-flex flex-column flex-md-row justify-content-between'>
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
)

AdminDaosItem.propTypes = {
  dao: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired
  }).isRequired,
  onDeleteDao: PropTypes.func
}

export default AdminDaosItem
