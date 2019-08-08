import React from 'react'
import PropTypes from 'prop-types'

const FundingItem = ({ title, url, children }) => (
  <div className='row pt-2 pb-2'>
    <div className='col-12'>
      <h2><a href={url} target='_blank' rel="noopener noreferrer">{title}</a></h2>
      {children}
    </div>
  </div>
)

FundingItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default FundingItem
