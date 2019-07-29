import React from 'react'

export default ({ audits }) => (
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
          {audits.map(audit => (
            <tr key={audit.auditUrl}>
              <td><a href={audit.auditorWebsite} target="_blank"  rel="noopener noreferrer">{audit.auditor}</a></td>
              <td><a href={audit.auditUrl} target="_blank"  rel="noopener noreferrer" className='break-words'>{audit.auditUrl}</a></td>
              <td><p>{audit.auditDate}</p></td>
            </tr>
          ))}
        </tbody>
      </table>
  </div>
)
