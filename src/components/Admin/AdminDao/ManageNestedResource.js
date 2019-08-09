import React from 'react'
import PropTypes from 'prop-types'

const ManageNestedResource = ({ resourceList, resourceName }) => (
  <div>
    <h1>Manage {resourceName}</h1>
    {resourceList.map(resource => (
      <div key={resource.url}>
        <p>{resource.title}</p>
      </div>
    ))}
  </div>
)

ManageNestedResource.propTypes = {
  resourceList: PropTypes.array.isRequired,
  resourceName: PropTypes.string.isRequired
}

export default ManageNestedResource
