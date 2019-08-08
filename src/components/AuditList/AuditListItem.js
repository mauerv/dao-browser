import React from 'react'
import PropTypes from 'prop-types'

const AuditListItem = ({ audit }) => (
  <tr>
    <td><a href={audit.auditor.website} target="_blank"  rel="noopener noreferrer">{audit.auditor.name}</a></td>
    <td><a href={audit.url} target="_blank"  rel="noopener noreferrer" className='break-words'>{audit.url}</a></td>
    <td><p>{audit.date}</p></td>
  </tr>
)

AuditListItem.propTypes = {
  audit: PropTypes.shape({
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    auditor: PropTypes.object.isRequired
  }).isRequired
}

export default AuditListItem
