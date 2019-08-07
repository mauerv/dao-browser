import React from 'react'
import PropTypes from 'prop-types'

const LinkBlock = ({ title, url }) => (
  <div className='pt-4 pb-4 border-bottom'>
    <h3>{title}</h3>
    <a href={url} target='_blank' rel="noopener noreferrer" className='wrap-url'>{url}</a>
  </div>
)

LinkBlock.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default LinkBlock
