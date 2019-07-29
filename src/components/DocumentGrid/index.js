import React from 'react'

export default ({ documents }) => (
  <div className='pt-4 pb-4 border-bottom'>
    <h3>Important Docs</h3>
    <div className='row'>
      {documents.map(document => (
          <div key={document.url} className='col-2 text-center'>
            <a href={document.url} target='_blank' rel="noopener noreferrer">
              <i className="far fa-file-alt fa-4x secondary-icon"></i>
              <p className='mt-1'>{document.title}</p>
            </a>
          </div>
        ))}
    </div>
  </div>
)
