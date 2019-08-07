import React from 'react'
import { Field, reduxForm } from 'redux-form'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
      <div className='form-group'>
        <label>{label}</label>
        <input {...input} type={type} className='form-control'/>
        {touched && error && <span>{error}</span>}
      </div>
  </div>
)

const renderSelect = ({ input, label, resourceList, type, meta: { touched, error } }) => (
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

const renderFileInput = ({
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

const EditDaoForm = props => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    blockchains,
    frameworks,
    statuses,
    onEditDao,
    dao_id
  } = props
  return (
    <form onSubmit={handleSubmit(values => onEditDao(values, dao_id))} id='editDao'>
      <Field name='name' type='text' component={renderField} label='Name' />
      <Field name='subtitle' type='text' component={renderField} label='Subtitle' />
      <Field name='description' type='textarea' component={renderField} label='Description' />
      <Field name='website' type='text' component={renderField} label='Website' />
      <Field name='mail' type='text' component={renderField} label='Email' />

      <Field name='contract_proof' type='text' component={renderField} label='Contract Proof' />

      <Field name='assets_governed' type='textarea' component={renderField} label='Assets Governed' />
      <Field name='decentralization_level' type='textarea' component={renderField} label='Decentralization Level' />
      <Field name='centralization_points' type='textarea' component={renderField} label='Centralization Points' />

      <Field name='twitter' type='text' component={renderField} label='Twitter' />
      <Field name='github' type='text' component={renderField} label='Github' />
      <Field name='medium' type='text' component={renderField} label='Medium' />
      <Field name='telegram' type='text' component={renderField} label='Telegram' />
      <Field name='reddit' type='text' component={renderField} label='Reddit' />
      <Field name='discord' type='text' component={renderField} label='Discord' />
      <Field name='youtube' type='text' component={renderField} label='Youtube' />
      <Field name='blockchain_id' resourceList={blockchains} component={renderSelect} label='Blockchain' />
      <Field name='status_id' resourceList={statuses} component={renderSelect} label='Status' />
      <Field name='framework_id' resourceList={frameworks} component={renderSelect} label='Framework' />
      <Field name='image' component={renderFileInput} />
      <div>
        <button type='submit' disabled={submitting} className='btn btn-primary'>
          Submit
        </button>
        <button type='button' disabled={pristine || submitting} className='btn btn-primary'>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'editDao'
})(EditDaoForm)
