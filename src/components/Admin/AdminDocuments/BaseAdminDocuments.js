import React, { Component } from 'react'

import AdminDocumentItem from './AdminDocumentItem'

const initialState = {
  title: '',
  url: ''
}

class AdminDocuments extends Component {
  state = initialState

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = e => {
    e.preventDefault()
    let formData = {
      dao_id: this.props.dao_id,
      title: this.state.title,
      url: this.state.url
    }
    this.props.onCreateDaoChild(formData, 'document', 'documents')
    this.setState(initialState)
  }

  render() {
    const {
      documents,
      onDeleteDaoChild,
      onEditDaoChild,
      dao_id
    } = this.props

    return (
      <div className='pt-3 pb-3'>
        <div className='pt-3 pb-3'>
          <ul>
            {documents.map(document => (
              <AdminDocumentItem
                document={document}
                onDeleteDaoChild={onDeleteDaoChild}
                onEditDaoChild={onEditDaoChild}
                dao_id={dao_id}
                key={document.id}
              />
            ))}
          </ul>
        </div>
        <div className='pt-3 pb-3'>
          <form onSubmit={this.onSubmit}>
            <input
              onChange={this.onChange}
              name='title'
              value={this.state.title}
            />
            <input
              onChange={this.onChange}
              name='url'
              value={this.state.url}
            />
            <button type='submit'>
              Add Document
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default AdminDocuments
