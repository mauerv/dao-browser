import { connect } from 'react-redux'

import AdminEditDao from './AdminEditDao'

import {
  getStatuses,
  getBlockchains,
  getFrameworks,
  getDao
} from '../../../selectors'

import {
  doFetchBlockchainList,
  doFetchFrameworkList,
  doFetchStatusList,
  doFetchDao,
  doEditDao
} from '../../../actions'

const mapStateToProps = (state, ownProps) => ({
  statuses: getStatuses(state),
  blockchains: getBlockchains(state),
  frameworks: getFrameworks(state),
  dao: getDao(state, parseInt(ownProps.match.params.dao_id))
})

export default connect(
  mapStateToProps,
  {
    onFetchBlockchainList: doFetchBlockchainList,
    onFetchFrameworkList: doFetchFrameworkList,
    onFetchStatusList: doFetchStatusList,
    onEditDao: doEditDao,
    onFetchDao: doFetchDao
  }
)(AdminEditDao)
