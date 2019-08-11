import React, { Component } from 'react'

class AdminDocumentItem extends Component {
  state = {
    title: '',
    url: '',
    editing: false
  }

  onStartEdit = () => this.setState({ editing: true })
  onStopEdit = () => this.setState({ editing: false })

  onEditSubmit = () => {
    const values = {
      title: this.state.title,
      url: this.state.url
    }
    this.props.onEditDaoChild('documents', this.props.document.id, values)
    this.onStopEdit()
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const {
      document,
      onDeleteDaoChild,
      onEditDaoChild,
      dao_id
    } = this.props
    const { editing } = this.state

    if (editing) {
      return (
        <li>
          <form>
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
          </form>
          <div>
            <i onClick={this.onEditSubmit} className="far fa-check-square fa-3x text-success form-icon-button"></i>
            <i onClick={this.onStopEdit} className="far fa-window-close fa-3x text-danger ml-2 form-icon-button"></i>
          </div>
        </li>
      )
    } else {
      return (
        <li key={document.id}>
          {document.title}
          <button
            type='button'
            onClick={this.onStartEdit}
            className='btn btn-sm btn-danger'
          >
            Edit
          </button>
          <button onClick={() => onDeleteDaoChild(dao_id, document.id, 'documents')} type='button'>
            Remove
          </button>
        </li>
      )
    }
  }
}

export default AdminDocumentItem
