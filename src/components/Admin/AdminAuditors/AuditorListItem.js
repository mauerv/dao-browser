import React, { Component } from 'react'

class AuditorListItem extends Component {
  state = {
    name: this.props.auditor.name,
    website: this.props.auditor.website,
    editing: false
  }

  onStartEdit = () => this.setState({ editing: true })

  onStopEdit = () => this.setState({ editing: false })

  onEditSubmit = () => {
    const values = {
      name: this.state.name,
      website: this.state.website
    }
    this.props.onEditResource(values, this.props.auditor.id)
    this.onStopEdit()
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { auditor, onEditAuditor, onDeleteAuditor } = this.props
    const { editing, name, website } = this.state

    if (editing) {
      return (
        null
      )
    } else {
      return (
        <li className='row justify-content-between'>
          <div className='d-flex'>
            <p>{auditor.name}</p>
            <p>{auditor.website}</p>
          </div>
          <div>
            <p
              onClick={this.onStartEdit}
              className='btn btn-sm btn-info'
            >
              Edit
            </p>
            <p
              onClick={() => onDeleteAuditor(auditor.id)}
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

export default AuditorListItem
