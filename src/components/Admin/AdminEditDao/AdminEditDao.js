import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import AdminDaoForm from '../AdminDaoForm'
import AdminDocuments from '../AdminDocuments'

const AdminEditDaoForm = reduxForm({
  form: 'editDao'
})(AdminDaoForm)

class AdminEditDao extends Component {
  componentDidMount() {
    this.props.onFetchBlockchainList()
    this.props.onFetchFrameworkList()
    this.props.onFetchStatusList()
    this.props.onFetchDao(this.props.match.params.dao_id)
  }
  render() {
    const {
      statuses,
      blockchains,
      frameworks,
      onEditDao,
      dao
    } = this.props

    if (!dao || !dao.documents) return <div />

    return (
      <div className='container'>
        <div className='row pt-3 pb-3'>
          <div className='col-12'>
            <h2>Edit DAO</h2>
            <p>Edit a DAO in the registry.</p>
          </div>
          <div className='col-12'>
            <AdminEditDaoForm
             statuses={statuses}
             frameworks={frameworks}
             blockchains={blockchains}
             onEditDao={onEditDao}
             initialValues={dao}
            />
          </div>
        </div>
        <AdminDocuments
          resourceList={dao.documents}
          resourceStruct={{ title: '', url: '' }}
          resourceName='document'
          collectionKey='documents'
          parentName='dao'
          parentId={dao.id}
        />
      </div>
    )
  }
}

export default AdminEditDao
