import React from 'react'

import ContributorManagement from './ContributorManagement'

const resourceStruct = { name: '', twitter: '' }

export default () => (
  <div className='container'>
    <ContributorManagement resourceName='contributor' resourceStruct={resourceStruct} />
  </div>
)
