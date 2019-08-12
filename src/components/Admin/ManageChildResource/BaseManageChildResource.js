import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ResourceListItem from '../BaseResource/ResourceListItem'

import { capitalize } from '../../../util'

class BaseManageChildResource extends Component {
  state = this.props.resourceStruct

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = e => {
    e.preventDefault()

    const {
      resourceName,
      collectionKey,
      resourceStruct,
      parentName,
      parentId,
      onCreateResource
    } = this.props

    let values = {}
    for (let key in resourceStruct) {
      values[key] = this.state[key]
    }
    values[`${parentName}_id`] = parentId
    onCreateResource(values, resourceName, collectionKey)

    this.setState(resourceStruct)
  }

  render() {
    const {
      resourceList,
      resourceStruct,
      resourceName,
      onDeleteResource,
      onEditResource,
      parentId,
      collectionKey
    } = this.props

    return (
      <div className='row flex-column pt-3 pb-3'>
        <div className='pt-3 pb-3'>
          <h3>{capitalize(collectionKey)}</h3>
          <ul className='list-group'>
            {resourceList.map(resource => (
              <ResourceListItem
                resource={resource}
                resourceStruct={resourceStruct}
                onDeleteResource={onDeleteResource}
                onEditResource={onEditResource}
                parentId={parentId}
                collectionKey={collectionKey}
                key={resource.id}
              />
            ))}
          </ul>
        </div>
        <div className='pt-3 pb-3'>
          <h3>Add a {resourceName}</h3>
          <form onSubmit={this.onSubmit}>
            {Object.keys(this.state).map(key => (
              <div className='form-group' key={key}>
                <label htmlFor={key}>{capitalize(resourceName)} {key}</label>
                <input
                  type={key === 'date' ? 'date' : 'text'}
                  name={key}
                  value={this.state[key]}
                  onChange={this.onChange}
                  className='form-control'
                  id={key}
                />
              </div>
            ))}
            <button type='submit'>
              Add New
            </button>
          </form>
        </div>
      </div>
    )
  }
}

BaseManageChildResource.propTypes = {
  resourceList: PropTypes.array.isRequired,
  resourceStruct: PropTypes.object.isRequired,
  resourceName: PropTypes.string,
  collectionKey: PropTypes.string,
  parentName: PropTypes.string,
  parentId: PropTypes.number,
  onCreateResource: PropTypes.func.isRequired,
  onDeleteResource: PropTypes.func.isRequired,
  onEditResource: PropTypes.func.isRequired
}

export default BaseManageChildResource
