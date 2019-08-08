import React from 'react'
import PropTypes from 'prop-types'

import ContributorGridItem from './ContributorGridItem'

const ContributorGrid = ({ contributors }) => (
  <div className='row pt-4 pb-4 border-bottom justify-content-center'>
    <h3 className='col-12'>Contributors</h3>
    {contributors.map(contributor => (
      <ContributorGridItem twitterId={contributor.twitter} key={contributor.twitter}/>
    ))}
  </div>
)

ContributorGrid.propTypes = {
  contributors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired
  }))
}

export default ContributorGrid
