import React, { Component } from 'react'

import EditDaoForm from './EditDaoForm'

class EditDao extends Component {
  componentDidMount() {
    this.props.onFetchBlockchainList()
    this.props.onFetchFrameworkList()
    this.props.onFetchStatusList()
  }
  render() {
    const { dao_id } = this.props.match.params
    const { statuses, blockchains, frameworks, onEditDao } = this.props

    return (
      <div className='container'>
        <div className='row pt-3 pb-3'>
          <div className='col-12'>
            <h2>Edit DAO</h2>
            <p>Edit a DAO in the registry.</p>
          </div>
          <div className='col-12'>
            <EditDaoForm
             statuses={statuses}
             frameworks={frameworks}
             blockchains={blockchains}
             onEditDao={onEditDao}
             dao_id={dao_id}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default EditDao
