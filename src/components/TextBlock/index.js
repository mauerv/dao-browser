import React from 'react'
import PropTypes from 'prop-types'

 const TextBlock = ({ title, text}) => (
  <div className='pt-4 pb-4 border-bottom'>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
)

TextBlock.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default TextBlock
