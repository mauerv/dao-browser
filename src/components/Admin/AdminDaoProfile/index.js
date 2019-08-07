import { connect } from 'react-redux'

import BaseAdminDaoProfile from './BaseAdminDaoProfile'

import { getDao } from '../../../selectors'
import { doFetchDao } from '../../../actions'

const mapStateToProps = (state, ownProps) => ({
  dao: getDao(state, parseInt(ownProps.match.params.dao_id))
})

export default connect(
  mapStateToProps,
  { onFetchDao: doFetchDao }
)(BaseAdminDaoProfile)
