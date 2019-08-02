import React from 'react'

export default ({ tags }) => {
  if (tags.length !== 0) {
    return (
      <div className='row pt-4 pb-4 border-bottom justify-content-center justify-content-sm-start'>
        {tags.map(tag => (
          <span key={tag.id} className='btn btn-warning tag-simple ml-0 mr-1'>{tag.name}</span>
        ))}
      </div>
    )
  } else return null
}
