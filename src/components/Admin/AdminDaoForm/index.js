import React, { Component } from 'react'
import { Field } from 'redux-form'

import {
  renderField,
  renderSelect,
  renderFileInput,
} from '../RenderFormHelpers'

class AdminDaoForm extends Component {
  handleFormSubmit = values => {
    const { initialValues, onEditDao, onCreateDao } = this.props
    initialValues ? onEditDao(values, initialValues.id) : onCreateDao(values)
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      blockchains,
      frameworks,
      statuses,
    } = this.props

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <Field name='name' type='text' component={renderField} label='Name' warn={(value, allValues, props) => 'Fuck you'} />
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
}

export default AdminDaoForm
