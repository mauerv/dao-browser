import React from 'react'

import StatusManagement from './StatusManagement.js'
import BlockchainManagement from './BlockchainManagement.js'
import FrameworkManagement from './FrameworkManagement.js'

const resourceStruct = { name: '' }

export default () => (
  <div className='container'>
    <StatusManagement resourceName='status' resourceStruct={resourceStruct} />
    <BlockchainManagement resourceName='blockchain' resourceStruct={resourceStruct} />
    <FrameworkManagement resourceName='framework' resourceStruct={resourceStruct} />
  </div>
)
