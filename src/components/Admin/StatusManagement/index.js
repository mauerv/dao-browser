import { connect } from 'react-redux'

import { getStatuses } from '../../../selectors'
import {
  doStatusListFetch,
  doCreateStatus
} from '../../../actions'

import BaseStatusManagement from './BaseStatusManagement'

const mapStateToProps = (state) => ({
  statuses: getStatuses(state)
})

export default connect(
  mapStateToProps,
  {
    onStatusListFetch: doStatusListFetch,
    onCreateStatus: doCreateStatus 
  }
)(BaseStatusManagement)
