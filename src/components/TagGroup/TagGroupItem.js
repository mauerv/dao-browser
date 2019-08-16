import React from 'react'
import PropTypes from 'prop-types'

const TagGroupItem = ({ name, tagType, withLabel = false }) => {
  let tagColor
  switch (tagType) {
    case 'Blockchain':
      tagColor = 'info'
      break
    case 'Framework':
      tagColor = 'secondary'
      break
    default:
      tagColor = 'success'
  }
  return (
    <div>
      {withLabel && <h5 className='mb-0'>{tagType}</h5>}
      <p className={`tag btn btn-outline-${tagColor}`}>{name}</p>
    </div>
  )
}

TagGroupItem.propTypes = {
  name: PropTypes.string.isRequired,
  tagType: PropTypes.string.isRequired,
  withLabel: PropTypes.bool
}

export default TagGroupItem
