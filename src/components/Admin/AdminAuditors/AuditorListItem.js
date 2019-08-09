import React, { Component } from 'react'

class AuditorListItem extends Component {
  state = {
    name: this.props.auditor.name,
    website: this.props.auditor.website,
    editing: false
  }

  onStartEdit = () => this.setState({ editing: true })

  onStopEdit = () => this.setState({ editing: false })

  onEditSubmit = () => {
    const values = {
      name: this.state.name,
      website: this.state.website
    }
    this.props.onEditAuditor(values, this.props.auditor.id)
    this.onStopEdit()
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { auditor, onDeleteAuditor } = this.props
    const { editing, name, website } = this.state

    if (editing) {
      return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <input
              onChange={this.onChange}
              value={name}
              name='name'
              className='form-control mr-2'
            />
            <input
              onChange={this.onChange}
              value={website}
              name='website'
              className='form-control mr-2'
            />
            <i onClick={this.onEditSubmit} className="far fa-check-square fa-3x text-success form-icon-button"></i>
            <i onClick={this.onStopEdit} className="far fa-window-close fa-3x text-danger ml-2 form-icon-button"></i>
        </li>
      )
    } else {
      return (
        <li className='d-flex justify-content-between'>
          <div className='d-flex'>
            <p className='mr-5'>{auditor.name}</p>
            <p>{auditor.website}</p>
          </div>
          <div>
            <p
              onClick={this.onStartEdit}
              className='btn btn-sm btn-info'
            >
              Edit
            </p>
            <p
              onClick={() => onDeleteAuditor(auditor.id)}
              className='btn btn-sm btn-danger'
            >
              Delete
            </p>
          </div>
        </li>
      )
    }
  }
}

export default AuditorListItem
