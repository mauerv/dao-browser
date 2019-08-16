import React from 'react'

export default ({
  resourceList,
  parent,
  singularResourceKey,
  pluralResourceKey,
  onLinkResource,
  onUnlinkResource
}) => {
  const visibleOptions = resourceList.filter(item => {
    for (let i = 0; i < parent[pluralResourceKey].length; i++) {
      if (item.id === parent[pluralResourceKey][i].id) {
        return false
      }
    }
    return true
  })

  return (
    <div>
      <div>
        <h2>Linked Options</h2>
          {parent[pluralResourceKey].map(resource => (
            <div
              onClick={() => onUnlinkResource(resource.id, parent.id, singularResourceKey, pluralResourceKey)}
              key={resource.id}
            >
              <p>{resource.name}</p>
            </div>
          ))}
      </div>
      <div>
        <h2>All Options</h2>
        {visibleOptions.map(resource => (
          <div
            onClick={() => onLinkResource(resource.id, parent.id, singularResourceKey, pluralResourceKey)}
            key={resource.id}
          >
            <p>{resource.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
