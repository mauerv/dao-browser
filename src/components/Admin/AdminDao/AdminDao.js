import React, { Component } from 'react'

import AdminDaoForm from './AdminDaoForm'
import ManageNestedResource from './ManageNestedResource'

class AdminDao extends Component {
  componentDidMount() {
    this.props.onFetchBlockchainList()
    this.props.onFetchFrameworkList()
    this.props.onFetchStatusList()
    this.props.onFetchDao(this.props.match.params.dao_id)
  }
  render() {
    const { dao_id } = this.props.match.params
    const {
      statuses,
      blockchains,
      frameworks,
      onEditDao,
      dao
    } = this.props

    if (!dao) return <div />

    return (
      <div className='container'>
        <div className='row pt-3 pb-3'>
          <div className='col-12'>
            <h2>Edit DAO</h2>
            <p>Edit a DAO in the registry.</p>
          </div>
          <div className='col-12'>
            <AdminDaoForm
             statuses={statuses}
             frameworks={frameworks}
             blockchains={blockchains}
             onEditDao={onEditDao}
             dao_id={dao_id}
            />
          </div>
          <div className='col-12'>
            <ManageNestedResource
              resourceList={dao.documents}
              resourceName='Documents'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default AdminDao
