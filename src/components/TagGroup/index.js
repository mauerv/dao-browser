import React from 'react'
import PropTypes from 'prop-types'

import TagGroupItem from './TagGroupItem'

const TagGroup = ({ framework, blockchain, status}) => (
  <div className='row justify-content-center pt-4 pb-4 border-bottom'>
    <div className='col-6 col-sm-4 col-md-3 text-center'>
      <TagGroupItem
        name={framework}
        tagType='Framework'
        withLabel
      />
    </div>
    <div className='col-6 col-sm-4 col-md-3 text-center'>
      <TagGroupItem
        name={blockchain}
        tagType='Blockchain'
        withLabel
      />
    </div>
    <div className='col-6 col-sm-4 col-md-3 text-center'>
      <TagGroupItem
        name={status}
        tagType='Status'
        withLabel
      />
    </div>
  </div>
)

TagGroup.propTypes = {
  framework: PropTypes.string.isRequired,
  blockchain: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
}

export default TagGroup
