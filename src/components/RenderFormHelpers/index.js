import React from 'react'

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
      <div className='form-group'>
        <label>{label}</label>
        <input {...input} type={type} className='form-control'/>
        {touched && error && <span>{error}</span>}
      </div>
  </div>
)

export const renderSelect = ({
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

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

export const renderFileInput = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  meta: omitMeta,
  ...props
}) => {
  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...props.input}
      {...props}
    />
  )
}
