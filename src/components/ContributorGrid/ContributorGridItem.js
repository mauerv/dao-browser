import React from 'react'
import PropTypes from 'prop-types'

const ContributorGridItem = ({ twitterId }) => (
  <a
    href={`https://twitter.com/${twitterId}`}
    className='col-md-2 col-sm-3 col-4 text-center'
    target='__blank' rel="noopener noreferrer"
  >
    <img
      className='img-thumbnail sm-thumbnail img-round'
      src={`http://avatars.io/twitter/${twitterId}`}
      alt=''
    />
    <p>@{twitterId}</p>
  </a>
)

ContributorGridItem.propTypes = {
  twitterId: PropTypes.string.isRequired
}

export default ContributorGridItem
