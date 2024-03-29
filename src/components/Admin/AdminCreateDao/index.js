import { connect } from 'react-redux'

import AdminCreateDao from './AdminCreateDao'

import {
  getStatuses,
  getBlockchains,
  getFrameworks
} from '../../../selectors'

import {
  doFetchBlockchainList,
  doFetchFrameworkList,
  doFetchStatusList,
  doCreateDao
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
    onCreateDao: doCreateDao
  }
)(AdminCreateDao)
