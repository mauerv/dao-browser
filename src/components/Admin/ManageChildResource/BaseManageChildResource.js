import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ResourceListItem from '../BaseResource/ResourceListItem'

import { capitalize } from '../../../util'

class BaseChildResource extends Component {
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
      <div className='pt-3 pb-3'>
        <div className='pt-3 pb-3'>
          <h3>{capitalize(collectionKey)}</h3>
          <ul>
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
              Add {resourceName}
            </button>
          </form>
        </div>
      </div>
    )
  }
}

BaseChildResource.propTypes = {
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

export default BaseChildResource
