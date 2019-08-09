import React from 'react'
import PropTypes from 'prop-types'

const TagGridItem = ({ tag }) => (
  <span className='btn btn-warning tag-simple ml-0 mr-1'>
    {tag.name}
  </span>
)

TagGridItem.propTypes = {
  tag: PropTypes.object.isRequired
}

export default TagGridItem
