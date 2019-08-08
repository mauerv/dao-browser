import React from 'react'
import PropTypes from 'prop-types'

const CreateInfoItem = ({ title, children, image, imageAlt, imageLeft = false }) => {
  return imageLeft ?  (
    <div className='row border-top border-bottom pt-5 pb-5 align-items-center'>
      <div className='col-sm-3 d-none d-sm-block'>
        <img className='lg-thumbnail' src={image} alt={imageAlt} />
      </div>
      <div className='col-12 col-sm-8 offset-sm-1 col-lg-8 offset-lg-0'>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  ) : (
    <div className='row border-top border-bottom pt-5 pb-5 align-items-center'>
      <div className='col-12 col-sm-8'>
        <h2>{title}</h2>
        {children}
      </div>
      <div className='col-sm-3 offset-sm-1 d-none d-sm-block'>
        <img className='lg-thumbnail' alt='' src={image} />
      </div>
    </div>
  )
}

CreateInfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  imageLeft: PropTypes.bool
}

export default CreateInfoItem
