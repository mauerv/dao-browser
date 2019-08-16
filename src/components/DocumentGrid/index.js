import React from 'react'
import PropTypes from 'prop-types'

import DocumentGridItem from './DocumentGridItem'

const DocumentGrid = ({ documents }) => {
  if (documents.length !== 0) {
    return (
      <div className='pt-4 pb-4 border-bottom'>
        <h3>Important Docs</h3>
        <div className='row'>
          {documents.map(document => (
            <DocumentGridItem document={document} key={document.id}/>
          ))}
        </div>
      </div>
    )
  } else return null
}

DocumentGrid.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
}

export default DocumentGrid
