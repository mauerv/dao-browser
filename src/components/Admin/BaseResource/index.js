import React, { Component } from 'react'

import ResourceListItem from './ResourceListItem'

class BaseResource extends Component {
  state = this.props.resourceStruct

  componentDidMount() {
    this.props.onFetchResourceList()
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = e => {
    e.preventDefault()
    this.props.onCreateResource(this.state)
    this.setState(this.props.resourceStruct)
  }

  render() {
    const { resourceList, resourceName, resourceStruct } = this.props

    return (
      <div className='pt-3 pb-3 border-bottom'>
        <div className='pt-3 pb-3'>
          <h3>Current {resourceName} list</h3>
          <ul className='list-group'>
            {resourceList.map(resource => (
              <ResourceListItem
                resource={resource}
                resourceStruct={resourceStruct}
                onEditResource={this.props.onEditResource}
                onDeleteResource={this.props.onDeleteResource}
                key={resource.id}
              />
            ))}
          </ul>
        </div>
        <div className='pt-3 pb-3'>
          <h3>Add a {resourceName}</h3>
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              {Object.keys(this.state).map(key => (
                <input
                  type='text'
                  name={key}
                  value={this.state[key]}
                  onChange={this.onChange}
                  className='form-control'
                  placeholder={`Insert ${key}`}
                />
              ))}
            </div>
            <button className="btn btn-primary ml-0">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default BaseResource
