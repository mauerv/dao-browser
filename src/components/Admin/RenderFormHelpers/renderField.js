import React from 'react'

export default ({
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
