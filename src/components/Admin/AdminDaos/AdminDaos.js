import React, { Component } from 'react'

import AdminDaosItem from './AdminDaosItem'

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
            <AdminDaosItem
              dao={dao}
              onDeleteDao={onDeleteDao}
              key={dao.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default AdminDaos
