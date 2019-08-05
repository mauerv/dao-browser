import { connect } from 'react-redux'

import { getStatuses } from '../../selectors'
import {
  doFetchStatusList,
  doCreateStatus,
  doDeleteStatus,
  doEditStatus
} from '../../actions'

import BasicResource from './BasicResource'

const mapStateToProps = state => ({
  resourceList: getStatuses(state)
})

export default connect(
  mapStateToProps,
  {
    onResourceListFetch: doFetchStatusList,
    onCreateResource: doCreateStatus,
    onDeleteResource: doDeleteStatus,
    onEditResource: doEditStatus
  }
)(BasicResource)
