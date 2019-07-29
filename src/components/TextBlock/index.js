import React from 'react'

export  default ({ title, text}) => {
  if (text) {
    return (
      <div className='row'>
        <div className='col-12 pt-4 pb-4 border-bottom'>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    )
  } else return null
}
