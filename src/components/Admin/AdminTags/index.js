import React from 'react'

import TagsManagement from './TagsManagement.js'

const resourceStruct = { name: '' }

export default () => (
  <div className='container'>
    <TagsManagement resourceName='tag' resourceStruct={resourceStruct} />
  </div>
)
