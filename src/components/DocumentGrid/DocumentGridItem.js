import React from 'react'
import PropTypes from 'prop-types'

const DocumentGridItem = ({ document }) => (
  <div key={document.url} className='col-2 text-center'>
    <a href={document.url} target='_blank' rel="noopener noreferrer">
      <i className="far fa-file-alt fa-4x secondary-icon"></i>
      <p className='mt-1'>{document.title}</p>
    </a>
  </div>
)

DocumentGridItem.propTypes = {
  document: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
}

export default DocumentGridItem
