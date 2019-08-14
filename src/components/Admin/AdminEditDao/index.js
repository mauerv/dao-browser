import { connect } from 'react-redux'

import AdminEditDao from './AdminEditDao'

import {
  getStatuses,
  getBlockchains,
  getFrameworks,
  getDao,
  getTags,
  getContributors
} from '../../../selectors'

import {
  doFetchBlockchainList,
  doFetchFrameworkList,
  doFetchStatusList,
  doFetchTagList,
  doFetchContributorList,
  doFetchDao,
  doEditDao,
  doLinkDaoResource,
  doUnlinkDaoResource
} from '../../../actions'

const mapStateToProps = (state, ownProps) => ({
  statuses: getStatuses(state),
  blockchains: getBlockchains(state),
  frameworks: getFrameworks(state),
  tags: getTags(state),
  contributors: getContributors(state),
  dao: getDao(state, parseInt(ownProps.match.params.dao_id))
})

export default connect(
  mapStateToProps,
  {
    onFetchBlockchainList: doFetchBlockchainList,
    onFetchFrameworkList: doFetchFrameworkList,
    onFetchStatusList: doFetchStatusList,
    onFetchTagList: doFetchTagList,
    onFetchContributorList: doFetchContributorList,
    onEditDao: doEditDao,
    onFetchDao: doFetchDao,
    onLinkResource: doLinkDaoResource,
    onUnlinkResource: doUnlinkDaoResource
  }
)(AdminEditDao)
