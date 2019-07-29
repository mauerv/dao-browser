import React from 'react'

export default ({ title, list }) => {
  if (list.length !== 0) {
    return (
      <div className='row pt-4 pb-4 border-bottom'>
        <h3 className='col-12'>{title}</h3>
        <ul className='col-12 list-group'>
          {list.map(item => (
            <li key={item.url} className='list-group-item d-flex justify-content-md-between flex-column flex-md-row align-items-md-center'>
              <a href={item.url} target='_blank' rel="noopener noreferrer" ><h6>{item.title}</h6></a>
              <p className='ml-'>{item.date}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  } else return null
}
