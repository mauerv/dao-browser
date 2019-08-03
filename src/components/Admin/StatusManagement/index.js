import { connect } from 'react-redux'

import { getStatuses } from '../../../selectors'
import { doStatusListFetch } from '../../../actions'

import BaseStatusManagement from './BaseStatusManagement'

const mapStateToProps = (state) => ({
  statuses: getStatuses(state)
})

export default connect(
  mapStateToProps,
  { onStatusListFetch: doStatusListFetch }
)(BaseStatusManagement)
