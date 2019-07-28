import React from 'react'

import StatusTag from './StatusTag'
import ChainTag from './ChainTag'
import FrameworkTag from './FrameworkTag'

export default ({ framework, blockchain, status}) => (
  <div className='row justify-content-center pt-4 pb-4 border-bottom'>
    <div className='col-6 col-sm-4 col-md-3 text-center'>
      <FrameworkTag framework={framework} />
    </div>
    <div className='col-6 col-sm-4 col-md-3 text-center'>
      <ChainTag chain={blockchain} />
    </div>
    <div className='col-6 col-sm-4 col-md-3 text-center'>
      <StatusTag status={status}/>
    </div>
  </div>
)
