import React, { Component } from 'react'

import AdminDaosItem from './AdminDaosItem'

class AdminDaos extends Component {
  componentDidMount() {
    this.props.onFetchDaoList()
  }

  render() {
    const { daos, onDeleteDao } = this.props
    return (
      <div className='container pt-3 pb-3'>
        <div className='row'>
          <h2 className='col-12'>Edit Daos</h2>
        </div>
        <div className='row'>
          <ul className='col-12 list-group'>
            {daos.map(dao => (
              <AdminDaosItem
                dao={dao}
                onDeleteDao={onDeleteDao}
                key={dao.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default AdminDaos
