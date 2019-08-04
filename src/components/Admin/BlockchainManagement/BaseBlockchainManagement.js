import React, { Component } from 'react'

import BlockchainListItem from './BlockchainListItem'

class BaseBlockchainManagement extends Component {
  state = {
    text: ''
  }

  componentDidMount() {
    this.props.onBlockchainListFetch()
  }

  onChange = e => this.setState({ text: e.target.value })

  onSubmit = e => {
    e.preventDefault()
    this.props.onCreateBlockchain(this.state.text)
  }

  render() {
    const { blockchains } = this.props

    return (
      <div className='pt-5 pb-5'>
        <div className='pt-3 pb-3'>
          <h3>Current Available Blockchain</h3>
          <ul className='list-group'>
            {blockchains.map(blockchain => (
              <BlockchainListItem
                blockchain={blockchain}
                onEditBlockchain={this.props.onEditBlockchain}
                onDeleteBlockchain={this.props.onDeleteBlockchain}
                key={blockchain.name}
              />
            ))}
          </ul>
        </div>
        <div className='pt-3 pb-3'>
          <h3>Add a Blockchain</h3>
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor='blockchainName'>Blockchain Name</label>
              <input
                type='text'
                value={this.state.text}
                onChange={this.onChange}
                className='form-control'
                id='blockchainName'
                placeholder="Enter new blockchain"
              />
            </div>
            <button className="btn btn-primary ml-0">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default BaseBlockchainManagement
