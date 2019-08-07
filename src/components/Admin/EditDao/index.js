import { connect } from 'react-redux'

import EditDao from './EditDao'

import {
  getStatuses,
  getBlockchains,
  getFrameworks
} from '../../../selectors'

import {
  doFetchBlockchainList,
  doFetchFrameworkList,
  doFetchStatusList,
  doEditDao
} from '../../../actions'

const mapStateToProps = state => ({
  statuses: getStatuses(state),
  blockchains: getBlockchains(state),
  frameworks: getFrameworks(state)
})

export default connect(
  mapStateToProps,
  {
    onFetchBlockchainList: doFetchBlockchainList,
    onFetchFrameworkList: doFetchFrameworkList,
    onFetchStatusList: doFetchStatusList,
    onEditDao: doEditDao
  }
)(EditDao)
