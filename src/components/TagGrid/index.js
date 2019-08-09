import React from 'react'
import PropTypes from 'prop-types'

import TagGridItem from './TagGridItem'

const TagGrid = ({ tags }) => (
  <div className='row pt-4 pb-4 border-bottom justify-content-center justify-content-sm-start'>
    {tags.map(tag => <TagGridItem tag={tag} key={tag.id} />)}
  </div>
)

TagGrid.propTypes = {
  tags: PropTypes.array.isRequired
}

export default TagGrid
