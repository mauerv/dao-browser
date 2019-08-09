import React, { Component } from 'react'

class ResourceListItem extends Component {
  state = {
     ...this.props.resource,
     editing: false
   }

  onStartEdit = () => this.setState({ editing: true })

  onStopEdit = () => this.setState({ editing: false })

  onEditSubmit = () => {
    const { resourceStruct } = this.props
    let values = {}
    for (let key in resourceStruct) {
      values[key] = this.state[key]
    }
    this.props.onEditResource(values, this.props.resource.id)
    this.onStopEdit()
  }

  onChange = e => this.setState({[e.target.name]: e.target.value})

  render() {
    const { resource, onDeleteResource, resourceStruct } = this.props
    const { editing } = this.state

    if (editing) {
      return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          <form className='flex-grow-1 mr-3'>
            {Object.keys(resourceStruct).map(key => (
              <input
                onChange={this.onChange}
                name={key}
                value={this.state[key]}
                className='form-control'
              />
            ))}
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
