import React from 'react'

import FeaturedGridItem from './FeaturedGridItem'

export default ({ items }) => (
  <div className='row pt-4 pb-4 border-bottom '>
    <div className='col-12'>
      <h2>Featured DAOs</h2>
    </div>
    {items.map(dao => <FeaturedGridItem item={dao} />)}
  </div>
)
