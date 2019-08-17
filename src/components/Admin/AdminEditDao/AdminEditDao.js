import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import AdminDaoForm from '../AdminDaoForm'
import ManageChildResource from '../ManageChildResource'
import LinkResource from '../LinkResource'

const AdminEditDaoForm = reduxForm({
  form: 'editDao',
  enableReinitialize: true,
  destroyOnUnmount: false
})(AdminDaoForm)

class AdminEditDao extends Component {
  componentDidMount() {
    this.props.onFetchBlockchainList()
    this.props.onFetchFrameworkList()
    this.props.onFetchStatusList()
    this.props.onFetchTagList()
    this.props.onFetchContributorList()
    this.props.onFetchDao(this.props.match.params.dao_id)
  }
  render() {
    const {
      statuses,
      blockchains,
      frameworks,
      tags,
      contributors,
      onEditDao,
      dao,
      onLinkResource,
      onUnlinkResource
    } = this.props

    if (!dao || !dao.documents) return <div />

    let {image, ...initialValues} = dao

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
             initialValues={initialValues}
            />
          </div>
        </div>
        <ManageChildResource
          resourceList={dao.documents}
          resourceStruct={{ title: '', url: '' }}
          resourceName='document'
          collectionKey='documents'
          parentName='dao'
          parentId={dao.id}
        />
        <ManageChildResource
          resourceList={dao.articles}
          resourceStruct={{ title: '', url: '', date: '' }}
          resourceName='article'
          collectionKey='articles'
          parentName='dao'
          parentId={dao.id}
        />
        <ManageChildResource
          resourceList={dao.podcasts}
          resourceStruct={{ title: '', url: '', date: '' }}
          resourceName='podcast'
          collectionKey='podcasts'
          parentName='dao'
          parentId={dao.id}
        />
        <ManageChildResource
          resourceList={dao.contracts}
          resourceStruct={{ name: '', address: '', description: '' }}
          resourceName='contract'
          collectionKey='contracts'
          parentName='dao'
          parentId={dao.id}
        />
        <ManageChildResource
          resourceList={dao.audits}
          resourceStruct={{ url: '', date: '', auditor_id: '' }}
          resourceName='audit'
          collectionKey='audits'
          parentName='dao'
          parentId={dao.id}
        />
        <LinkResource
          resourceList={tags}
          parent={dao}
          pluralResourceKey='tags'
          singularResourceKey='tag'
          onLinkResource={onLinkResource}
          onUnlinkResource={onUnlinkResource}
        />
        <LinkResource
          resourceList={contributors}
          parent={dao}
          pluralResourceKey='contributors'
          singularResourceKey='contributor'
          onLinkResource={onLinkResource}
          onUnlinkResource={onUnlinkResource}
        />
      </div>
    )
  }
}

export default AdminEditDao
