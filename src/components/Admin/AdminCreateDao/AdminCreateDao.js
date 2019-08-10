import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import AdminDaoForm from '../AdminDaoForm'

const AdminCreateDaoForm = reduxForm({
  form: 'createDao'
})(AdminDaoForm)

class AdminCreateDao extends Component {
  componentDidMount() {
    this.props.onFetchBlockchainList()
    this.props.onFetchFrameworkList()
    this.props.onFetchStatusList()
  }

  render() {
    const {
      statuses,
      blockchains,
      frameworks,
      onCreateDao
    } = this.props

    return (
     <div className='container'>
       <div className='row pt-3 pb-3'>
         <div className='col-12'>
           <h2>Create DAO</h2>
           <p>Add a new DAO to the registry.</p>
         </div>
         <div className='col-12'>
           <AdminCreateDaoForm
            statuses={statuses}
            frameworks={frameworks}
            blockchains={blockchains}
            onCreateDao={onCreateDao}
           />
         </div>
       </div>
     </div>
    )
  }
}

export default AdminCreateDao
