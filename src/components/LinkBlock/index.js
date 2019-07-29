import React from 'react'

export default ({ title, url }) => {
  if (url) {
    return (
      <div className='row'>
          <div className='col-12 pt-4 pb-4 border-bottom'>
            <h3>{title}</h3>
            <a href={url} target='_blank' rel="noopener noreferrer" className='wrap-url'>{url}</a>
          </div>
      </div>  
    )
  } else return null
}
