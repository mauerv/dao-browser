import React from 'react'

import StatusManagement from './StatusManagement.js'
import BlockchainManagement from './BlockchainManagement.js'
import FrameworkManagement from './FrameworkManagement.js'

export default () => (
  <div className='container'>
    <StatusManagement resourceName='status' />
    <BlockchainManagement resourceName='blockchain'/>
    <FrameworkManagement resourceName='framework' />
  </div>
)
