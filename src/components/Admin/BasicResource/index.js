import React, { Component } from 'react'

import ResourceListItem from './ResourceListItem'

class BasicResource extends Component {
  state = {
    text: ''
  }

  componentDidMount() {
    this.props.onResourceListFetch()
  }

  onChange = e => this.setState({ text: e.target.value })

  onSubmit = e => {
    e.preventDefault()
    this.props.onCreateResource(this.state.text)
  }

  render() {
    const { resourceList, resourceName } = this.props

    return (
      <div className='pt-5 pb-5'>
        <div className='pt-3 pb-3'>
          <h3>Current Available {resourceName}</h3>
          <ul className='list-group'>
            {resourceList.map(resource => (
              <ResourceListItem
                resource={resource}
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
              <label htmlFor={`${resourceName}Name`}>{resourceName} Name</label>
              <input
                type='text'
                value={this.state.text}
                onChange={this.onChange}
                className='form-control'
                id={`${resourceName}Name`}
                placeholder={`Enter new ${resourceName}`}
              />
            </div>
            <button className="btn btn-primary ml-0">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default BasicResource
