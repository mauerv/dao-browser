import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ResourceListItem extends Component {
  state = {
     ...this.props.resource,
     editing: false
   }

  onStartEdit = () => this.setState({ editing: true })
  onStopEdit = () => this.setState({ editing: false })

  onEditSubmit = () => {
    const { resource, resourceStruct, onEditResource, collectionKey } = this.props
    let values = {}
    for (let key in resourceStruct) {
      values[key] = this.state[key]
    }
    onEditResource(values, resource.id, collectionKey)
    this.onStopEdit()
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const {
      resource,
      onDeleteResource,
      resourceStruct,
      parentId,
      collectionKey
    } = this.props
    const { editing } = this.state

    if (editing) {
      return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          <form className='flex-grow-1 mr-3'>
            {Object.keys(resourceStruct).map(key => (
              <input
                type={key === 'date' ? 'date' : 'text'}
                onChange={this.onChange}
                name={key}
                value={this.state[key]}
                className='form-control'
                key={key}
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
          {Object.keys(resourceStruct).map(key => (
            <p key={key}>
              {this.state[key]}
            </p>
          ))}
          <div>
            <button
              type='button'
              onClick={this.onStartEdit}
              className='btn btn-sm btn-info'
            >
              Edit
            </button>
            <button
              type='button'
              onClick={() => onDeleteResource(resource.id, parentId, collectionKey)}
              className='btn btn-sm btn-danger'
            >
              Delete
            </button>
          </div>
        </li>
      )
    }
  }
}

ResourceListItem.propTypes = {
  resource: PropTypes.object.isRequired,
  resourceStruct: PropTypes.object.isRequired,
  onEditResource: PropTypes.func.isRequired,
  onDeleteResource: PropTypes.func.isRequired,
  parentId: PropTypes.number,
  collectionKey: PropTypes.string,
}

export default ResourceListItem
