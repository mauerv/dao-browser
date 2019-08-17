import React from 'react'
import PropTypes from 'prop-types'

const SocialIconItem = ({ network, id, extraUrl, theme }) => {
  const url = extraUrl ? `${extraUrl}${id}` : id
  return (
    <a href={url} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
      <i className={`fab fa-${network} fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
    </a>
  )

}

SocialIconItem.propTypes = {
  network: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  extraUrl: PropTypes.string,
  theme: PropTypes.string.isRequired
}

export default SocialIconItem
