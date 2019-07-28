import React from 'react'

export default ({ framework, label = true }) => {
  let frameworkClass = ''

  switch (framework) {
    case 'Moloch Fork':
      frameworkClass = 'danger'
      break;
    case 'DAOStack':
      frameworkClass = 'info'
      break;
    case 'Colony':
      frameworkClass = 'success'
      break;
    case 'TCR':
      frameworkClass = 'warning'
      break;
    case 'Giveth DAC':
      frameworkClass = 'dark'
      break;
    default:
      frameworkClass = 'secondary'
  }

  return (
    <div>
      {label && <h5 className='mb-0'>Framework</h5>}
      <p className={`tag btn btn-outline-${frameworkClass}`}>{framework}</p>
    </div>
  )
}
