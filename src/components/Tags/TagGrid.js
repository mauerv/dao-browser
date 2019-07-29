import React from 'react'

export default ({ tags }) => {
  if (tags.length !== 0) {
    return (
      <div className='row pt-4 pb-4 border-bottom'>
        {tags.map(tag => (
          <span className='btn btn-warning tag-simple ml-0 mr-1'>{tag}</span>
        ))}
      </div>
    )
  } else return null
}
