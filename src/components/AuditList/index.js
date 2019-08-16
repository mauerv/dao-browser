import React from 'react'
import PropTypes from 'prop-types'

import AuditListItem from './AuditListItem'

const AuditList = ({ audits }) => (
  <div className='pt-4 pb-4 border-bottom'>
    <h3>Code Audits</h3>
      <table className='table table-bordered mb-0'>
        <thead className='thead-light'>
          <tr>
            <th scope="col">Auditor</th>
            <th scope="col">Audit</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {audits.map(audit => <AuditListItem audit={audit} key={audit.id}/>)}
        </tbody>
      </table>
  </div>
)

AuditList.propTypes = {
  audits: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    auditor: PropTypes.object.isRequired
  })).isRequired
}

export default AuditList
