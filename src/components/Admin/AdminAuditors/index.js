import React from 'react'

import BaseAdminAuditors from './BaseAdminAuditors'

const resourceStruct = {
  name: '',
  website: ''
}

export default () => (
  <div className='container'>
    <BaseAdminAuditors resourceName='auditor' resourceStruct={resourceStruct} />
  </div>
)
