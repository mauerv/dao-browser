import React from 'react'

export default ({ audits }) => {
  if (audits.length !== 0) {
    return (
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
                <tr key={audit.url}>
                  <td><a href={audit.auditor.website} target="_blank"  rel="noopener noreferrer">{audit.auditor.name}</a></td>
                  <td><a href={audit.url} target="_blank"  rel="noopener noreferrer" className='break-words'>{audit.url}</a></td>
                  <td><p>{audit.date}</p></td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    )
  } else return null
}
