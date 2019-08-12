import { connect } from 'react-redux'

import { getStatuses } from '../../../selectors'
import {
  doFetchStatusList,
  doCreateStatus,
  doDeleteStatus,
  doEditStatus
} from '../../../actions'

import BaseResource from '../BaseResource'

const mapStateToProps = state => ({
  resourceList: getStatuses(state)
})

export default connect(
  mapStateToProps,
  {
    onFetchResourceList: doFetchStatusList,
    onCreateResource: doCreateStatus,
    onDeleteResource: doDeleteStatus,
    onEditResource: doEditStatus
  }
)(BaseResource)
