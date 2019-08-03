import React, { Component } from 'react'

class BaseStatusManagement extends Component {
  state = {
    text: ''
  }

  componentDidMount() {
    this.props.onStatusListFetch()
  }

  onChange = e => this.setState({ text: e.target.value })

  onSubmit = e => {
    e.preventDefault()
    this.props.onCreateStatus(this.state.text)
  }

  render() {
    const { statuses } = this.props

    return (
      <div className='pt-5 pb-5'>
        <div className='pt-3 pb-3'>
          <h3>Current Status Codes</h3>
          <ul className='list-group'>
            {statuses.map(status => (
              <li key={status.name} className='list-group-item'>
                {status.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='pt-3 pb-3'>
          <h3>Add a Status</h3>
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor='statusName'>Status Name</label>
              <input
                type='text'
                value={this.state.text}
                onChange={this.onChange}
                className='form-control'
                id='statusName'
                aria-describedby="emailHelp"
                placeholder="Enter new status"
              />
            </div>
            <button className="btn btn-primary ml-0">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default BaseStatusManagement
