import React, { Component } from 'react'

import AuditorListItem from './AuditorListItem'

class BaseAuditorManagement extends Component {
  state = {
    name: '',
    website: ''
  }

  componentDidMount() {
    this.props.onAuditorListFetch()
  }

  onChange = e => this.setState({ text: e.targ })

  onSubmit = e => {
    e.preventDefault()
  }

  render() {
    const {
      auditorList,
      onEditAuditor,
      onDeleteAuditor
    } = this.props

    return (
      <div className='container pt-3 pb-3 border-bottom'>
        <div className='pt-3 pb-3'>
          <h3>Current auditor list</h3>
          <ul className='list-group'>
            {auditorList.map(auditor => (
              <AuditorListItem
                auditor={auditor}
                onEditAuditor={onEditAuditor}
                onDeleteAuditor={onDeleteAuditor}
                key={auditor.id}
              />
            ))}
          </ul>
        </div>
        <div className='pt-3 pb-3'>
          <h3>Add an auditor</h3>
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <input
                type='text'
                value={this.state.name}
                onChange={this.onChange}
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                value={this.state.website}
                onChange={this.onChange}
                className='form-control'
              />
            </div>
            <button className='btn btn-primary ml-0'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default BaseAuditorManagement
