import React from 'react'

export default ({
  input,
  label,
  resourceList,
  type,
  meta: { touched, error }
}) => (
  <div>
    <div className='form-group'>
      <label>{label}</label>
      <select {...input} className='form-control'>
        {resourceList.map(resource => (
          <option value={resource.id} key={resource.id}>{resource.name}</option>
        ))}
      </select>
    </div>
  </div>
)
