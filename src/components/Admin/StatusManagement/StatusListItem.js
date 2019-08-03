import React, { Component } from 'react'

class StatusListItem extends Component {
  state = {
    text: this.props.status.name,
    editing: false
  }

  onStartEdit = () => this.setState({ editing: true })

  onStopEdit = () => this.setState({ editing: false })

  onEditSubmit = () => {
    this.props.onEditStatus(this.state.text, this.props.status.id)
    this.onStopEdit()
  }

  onChange = e => this.setState({ text: e.target.value })

  render() {
    const { status, onEditStatus, onDeleteStatus } = this.props
    const { editing, text } = this.state

    if (editing) {
      return (
        <li key={status.name} className='list-group-item d-flex justify-content-between align-items-center'>
          <form className='flex-grow-1 mr-3'>
            <input
              onChange={this.onChange}
              value={text}
              className='form-control'
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
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          <p className='mb-0'>{status.name}</p>
          <div>
            <p
              onClick={this.onStartEdit}
              className='btn btn-sm btn-info'>
              Edit
            </p>
            <p
              onClick={() => onDeleteStatus(status.id)}
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

export default StatusListItem
