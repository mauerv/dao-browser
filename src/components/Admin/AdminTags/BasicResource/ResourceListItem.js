import React, { Component } from 'react'

class ResourceListItem extends Component {
  state = {
    text: this.props.resource.name,
    editing: false
  }

  onStartEdit = () => this.setState({ editing: true })

  onStopEdit = () => this.setState({ editing: false })

  onEditSubmit = () => {
    this.props.onEditResource(this.state.text, this.props.resource.id)
    this.onStopEdit()
  }

  onChange = e => this.setState({ text: e.target.value })

  render() {
    const { resource, onEditResource, onDeleteResource } = this.props
    const { editing, text } = this.state

    if (editing) {
      return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
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
          <p className='mb-0'>{resource.name}</p>
          <div>
            <p
              onClick={this.onStartEdit}
              className='btn btn-sm btn-info'
            >
              Edit
            </p>
            <p
              onClick={() => onDeleteResource(resource.id)}
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

export default ResourceListItem
