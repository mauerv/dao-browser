import React from 'react'

export default ({ chain, label = true }) => {
  let chainClass = ''

  switch (chain) {
    default:
      chainClass = 'info'
  }

  return (
    <div>
      {label && <h5 className='mb-0'>Blockchain</h5>}
      <p className={`tag btn btn-outline-${chainClass}`}>{chain}</p>
    </div>
  )
}
