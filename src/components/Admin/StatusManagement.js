import React, { Component } from 'react'

class StatusManagement extends Component {
  state = {
    text: ''
  }

  onChange = e => this.setState({ text: e.target.value })

  onSubmit = e => {
    e.preventDefault()

  }

  render() {
    return (
      <div className='pt-5 pb-5'>
        <h2>Add a Status</h2>
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
    )
  }
}

export default StatusManagement
